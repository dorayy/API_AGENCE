<?php

namespace App\Model;

use Core\Model\DefaultModel;

/**
 * @method Categorie[] findAll()
 */
final class UserModel extends DefaultModel
{
    protected string $table = "user";
    protected string $entity = "User";

    /**
     * Ajoute un article a la database
     * 
     * @param array $article
     * @return ?int
     */
    public function saveUser(array $user): ?int
    {
        // TODO change sql

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
}
