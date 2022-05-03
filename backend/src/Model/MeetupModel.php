<?php

namespace App\Model;

use Core\Model\DefaultModel;

class MeetupModel extends DefaultModel
{
    protected string $table = "meetup";
    protected string $entity = "Meetup";

    // update
    public function updateMeetup(int $id, array $updatedMeetup)
    {
        $stmt = "UPDATE $this->table SET email=:email, telephone=:telephone, nom=:nom, prenom=:prenom WHERE annonce_id=$id";
        $prepare = $this->pdo->prepare($stmt);

        if ($prepare->execute($updatedMeetup)) {
            return true;
        } else {
            $this->jsonResponse("Erreur lors de l'update du meetup $id", 400);
        }
    }
}
