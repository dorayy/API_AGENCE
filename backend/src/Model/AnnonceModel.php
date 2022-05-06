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
     * Retour les x dernieres annonces du site
     * 
     * @param int $limit
     * 
     * @return array<int,object>
     */
    public function findLast(int $limit): array
    {
        try {
            $stmt = "SELECT * FROM $this->table ORDER BY id desc LIMIT $limit;";
            $query = $this->pdo->query($stmt, \PDO::FETCH_CLASS, "App\Entity\\$this->entity");

            return $query->fetchAll();
        } catch (\PDOException $e) {
            $this->jsonResponse($e->getMessage(), 400);
        }
    }

    /**
     * Ajoute une annonce a la database
     * 
     * @param array $annonce
     * @return ?int
     */
    public function saveAnnonce(array $annonce): ?int
    {
        $stmt = "INSERT INTO $this->table (titre, prix, description, images, vendu, user_id , type_bien , type_contrat, superficie, options)
            VALUES  (:titre, :prix, :description, :images, :vendu, :user_id , :type_bien , :type_contrat, :superficie, :options)";
        $prepare = $this->pdo->prepare($stmt);

        if ($prepare->execute($annonce)) {
            // récupéré l'id du dernier ajout a la bd
            return $this->pdo->lastInsertId($this->table);
        } else {
            $this->jsonResponse("Erreur lors de l'insersion d'un user", 400);
        }
    }


    /**
     * Retourne les annonces d'un utilisateur
     * 
     * @param int $userId
     * 
     * @return array
     */
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

    /**
     * Update une annonce de la database
     * 
     * @param int $id
     * @param array $user
     * 
     * @return void
     */
    public function updateAnnonce(int $id, array $updatedAnnounce)
    {
        $stmt = "UPDATE $this->table SET titre=:titre, prix=:prix, description=:description , images=:images , vendu=:vendu , type_bien=:type_bien , type_contrat=:type_contrat, superficie=:superficie WHERE id = $id;";
        $prepare = $this->pdo->prepare($stmt);

        if ($prepare->execute($updatedAnnounce)) {
            return true;
        } else {
            $this->jsonResponse("Erreur lors de l'update de l'announce $id", 400);
        }
    }
}
