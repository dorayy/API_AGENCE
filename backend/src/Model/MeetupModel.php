<?php

namespace App\Model;

use Core\Model\DefaultModel;

class MeetupModel extends DefaultModel
{
    protected string $table = "meetup";
    protected string $entity = "Meetup";


    /**
     * Ajoute un meetup a la database
     * 
     * @param array $meetup
     * @return ?int
     */
    public function saveMeetup(array $meetup): ?int
    {
        $stmt = "INSERT INTO $this->table (email, telephone, nom, prenom, annonce_id , date) VALUES (:email, :telephone, :nom, :prenom, :annonce_id , :date)";
        $prepare = $this->pdo->prepare($stmt);

        if ($prepare->execute($meetup)) {
            // récupéré l'id du dernier ajout a la bd
            return $this->pdo->lastInsertId($this->table);
        } else {
            $this->jsonResponse("Erreur lors de l'insersion d'un meetup", 400);
        }
    }

    public function updateMeetup(int $id, array $updatedMeetup)
    {
        $stmt = "UPDATE $this->table SET email=:email, telephone=:telephone, date=:date WHERE annonce_id=$id";
        $prepare = $this->pdo->prepare($stmt);

        if ($prepare->execute($updatedMeetup)) {
            return true;
        } else {
            $this->jsonResponse("Erreur lors de l'update du meetup $id", 400);
        }
    }

    /**
     * Retourne les meetup d'une annonce
     * 
     * @param int $annonce
     * 
     * @return array
     */
    public function findByAnnonceId(int $annonce_id): array
    {
        try {
            $stmt = "SELECT * FROM $this->table WHERE `annonce_id` = $annonce_id;";
            $query = $this->pdo->query($stmt, \PDO::FETCH_CLASS, "App\Entity\\$this->entity");

            return $query->fetchAll();
        } catch (\PDOException $e) {
            $this->jsonResponse($e->getMessage(), 400);
        }
        return [];
    }
}
