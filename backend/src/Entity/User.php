<?php

namespace App\Entity;

use JsonSerializable;

class Article implements JsonSerializable
{
    // Uniquement pour php 
    // readonly met la propriété en lecture uniquement
    // private readonly int $id
    private int $id;
    private string $email;
    private string $username;
    private int $roles;
    private int $password;

    public function jsonSerialize(): mixed
    {
        return [
            "id" => $this->id,
            "email" => $this->email,
            "username" => $this->username,
            "roles" => $this->roles
        ];
    }
}
