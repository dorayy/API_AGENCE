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
     * Ajoute un article a la database
     * 
     * @param array $user
     * @return ?int
     */
    public function saveUser(array $user): ?int
    {
        $stmt = "INSERT INTO $this->table (username, email, roles, password) VALUES (:username, :email, :roles, :password)";
        $prepare = $this->pdo->prepare($stmt);

        if ($prepare->execute($user)) {
            // récupéré l'id du dernier ajout a la bd
            return $this->pdo->lastInsertId($this->table);
        } else {
            $this->jsonResponse("Erreur lors de l'insersion d'un user", 400);
        }
    }
}
