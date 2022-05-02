<?php

namespace App\Model;

use Core\Model\DefaultModel;

/**
 * @method User[] findAll()
 * @method User find(int $id)
 * @method ?int saveUser(array $user)
 */
final class UserModel extends DefaultModel
{
    protected string $table = "user";
    protected string $entity = "User";

    /**
     * Ajoute un user a la database
     * 
     * @param array $user
     * @return ?int
     */
    public function saveUser(array $user): ?int
    {
        $stmt = "INSERT INTO $this->table (username, email, roles, password) VALUES (:username, :email, :roles, :password)";
        $prepare = $this->pdo->prepare($stmt);
        $hash = password_hash($user["password"], PASSWORD_BCRYPT);
        $user["password"] = $hash;


        if ($prepare->execute($user)) {
            // récupéré l'id du dernier ajout a la bd
            return $this->pdo->lastInsertId($this->table);
        } else {
            $this->jsonResponse("Erreur lors de l'insersion d'un user", 400);
        }
    }

    /**
     * Update un user de la database
     * 
     * @param int $id
     * @param array $user
     * 
     * @return void
     */
    public function updateUser(int $id, array $updatedUser)
    {
        $stmt = "UPDATE $this->table SET username=:username, email=:email, roles=:roles WHERE id = $id;";
        $prepare = $this->pdo->prepare($stmt);

        if ($prepare->execute($updatedUser)) {
            return true;
        } else {
            $this->jsonResponse("Erreur lors de l'update d'un user", 400);
        }
    }

    /**
     * Supprime un utilisateur de la database
     * 
     * @param int $id
     */
    public function deleteUser(int $id)
    {
        $stmt = "DELETE FROM $this->table WHERE id = $id";
        $prepare = $this->pdo->prepare($stmt);

        if ($prepare->execute()) {
            // récupéré l'id du dernier ajout a la bd
            $this->jsonResponse("Suppresion de l'utilisateur effectué", 201);
        } else {
            $this->jsonResponse("Erreur lors de la suppression d'un utilisateur", 400);
        }
    }
}
