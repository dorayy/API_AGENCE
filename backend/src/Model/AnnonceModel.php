<?php

namespace App\Model;

use Core\Model\DefaultModel;

/**
 * @method Annonce[] findAll()
 * @method Annonce find(int $id)
 * @method ?int saveAnnonce(array $annonce)
 */
final class AnnonceModel extends DefaultModel
{
    protected string $table = "annonces";
    protected string $entity = "Annonce";

    /**
     * Ajoute une annonce a la database
     * 
     * @param array $annonce
     * @return ?int
     */
    public function saveAnnonce(array $annonce): ?int
    {
        $stmt = "INSERT INTO $this->table (titre, prix, description, images, vendu) VALUES (:titre, :prix, :description, :images, :vendu)";
        $prepare = $this->pdo->prepare($stmt);

        if ($prepare->execute($annonce)) {
            // récupéré l'id du dernier ajout a la bd
            return $this->pdo->lastInsertId($this->table);
        } else {
            $this->jsonResponse("Erreur lors de l'insersion d'un user", 400);
        }
    }

    /**
     * Supprime une annonce a la database
     * 
     * @param int $id
     * 
     * @
     */
    public function deleteAnnonce(int $id): void
    {
        $stmt = "DELETE FROM $this->table WHERE id = $id";
        $prepare = $this->pdo->prepare($stmt);

        if ($prepare->execute()) {
            // récupéré l'id du dernier ajout a la bd
            $this->jsonResponse("Suppresion de l'annonce effectué", 201);
        } else {
            $this->jsonResponse("Erreur lors de la suppression d'une annonce", 400);
        }
    }

    public function findByUserId(int $userId): array
    {
        try {
            $stmt = "SELECT * FROM $this->table WHERE `user_id` = $userId;";
            $query = $this->pdo->query($stmt, \PDO::FETCH_CLASS, "App\Entity\\$this->entity");

            return $query->fetchAll();
        } catch (\PDOException $e) {
            $this->jsonResponse($e->getMessage(), 400);
        }
        return [];
    }
}
