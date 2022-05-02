<?php

namespace Core\Model;

use Core\Database\Database;
use Core\Traits\JsonTrait;

/**
 * @method void jsonResponse(mixed $data, int $code = 200) Envoie les données passées en paramêtre au format json
 */
class DefaultModel extends Database
{
    use JsonTrait;

    protected string $table;
    protected string $entity;

    /**
     * Retour l'ensemble des éléments d'une table
     * 
     * @return array<int,object>
     */
    public function findAll(): array
    {
        try {
            $stmt = "SELECT * FROM $this->table;";
            $query = $this->pdo->query($stmt, \PDO::FETCH_CLASS, "App\Entity\\$this->entity");

            return $query->fetchAll();
        } catch (\PDOException $e) {
            $this->jsonResponse($e->getMessage(), 400);
        }
    }

    public function find(int $id): object|false
    {
        try {
            $stmt = "SELECT * FROM $this->table WHERE `id` = $id;";
            $query = $this->pdo->query($stmt, \PDO::FETCH_CLASS, "App\Entity\\$this->entity");

            return $query->fetch();
        } catch (\PDOException $e) {
            $this->jsonResponse($e->getMessage(), 400);
        }
    }
}
