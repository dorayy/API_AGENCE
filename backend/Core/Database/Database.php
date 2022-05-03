<?php

namespace Core\Database;

class Database
{
    protected ?\PDO $pdo;

    public function __construct(
        private string $host = "localhost:3306",
        private string $dbname = "agence",
        private string $user = "root",
        private string $pass = ""
    ) {
        $host = $_ENV['DATABASE_HOST'] | $host;
        $dbname = $_ENV['DATABASE_NAME'] | $dbname;
        $user = $_ENV['DATABASE_USER'] | $user;
        $pass = $_ENV['DATABASE_PASSWORD'] | $pass;
        $this->pdo = new \PDO(
            "mysql:host=$this->host;dbname=$this->dbname",
            $this->user,
            $this->pass,
            [
                \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_OBJ
            ]
        );
        $this->pdo->exec("SET NAMES UTF8");
    }
}
