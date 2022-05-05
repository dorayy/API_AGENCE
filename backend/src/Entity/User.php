<?php

namespace App\Entity;

use JsonSerializable;
use OpenApi\Attributes as OA;

#[OA\Schema(
    title: "User",
    description: "Schéma d'un User"
)]
class User implements JsonSerializable
{
    // Uniquement pour php 
    // readonly met la propriété en lecture uniquement
    // private readonly int $id
    #[OA\Property(
        type: "integer",
        nullable: false,
        example: 1
    )]
    private int $id;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "contact@agence.com"
    )]
    private string $email;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "agence"
    )]
    private string $username;

    #[OA\Property(
        type: "int",
        nullable: false,
        example: 1
    )]
    private int $roles;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: '$2y$10$FT4e0uyY2rdJSgyOUMLBeefpL1hO1Lto0hwcM7mbcCBL5aam561DS'
    )]
    private string $password;

    public function jsonSerialize(): mixed
    {
        return [
            "id" => $this->id,
            "email" => $this->email,
            "username" => $this->username,
            "roles" => $this->roles,
        ];
    }

    /**
     * Get the value of id
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * Set the value of id
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of email
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * Set the value of email
     */
    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of username
     */
    public function getUsername(): string
    {
        return $this->username;
    }

    /**
     * Set the value of username
     */
    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get the value of roles
     */
    public function getRoles(): int
    {
        return $this->roles;
    }

    /**
     * Set the value of roles
     */
    public function setRoles(int $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * Get the value of password
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * Set the value of password
     */
    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }
}
