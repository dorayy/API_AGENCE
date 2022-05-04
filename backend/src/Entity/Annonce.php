<?php

namespace App\Entity;

use JsonSerializable;

class Annonce implements JsonSerializable
{
    // Uniquement pour php 
    // readonly met la propriété en lecture uniquement
    // private readonly int $id
    private int $id;
    private string $titre;
    private float $prix;
    private string $description;
    private string $images;
    private bool $vendu;
    private int $user_id;

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
     * Get the value of titre
     */
    public function getTitre(): string
    {
        return $this->titre;
    }

    /**
     * Set the value of titre
     */
    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * Get the value of prix
     */
    public function getPrix(): float
    {
        return $this->prix;
    }

    /**
     * Set the value of prix
     */
    public function setPrix(float $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    /**
     * Get the value of description
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * Set the value of description
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of images
     */
    public function getImages(): string
    {
        return $this->images;
    }

    /**
     * Set the value of images
     */
    public function setImages(string $images): self
    {
        $this->images = $images;

        return $this;
    }

    /**
     * Get the value of vendu
     */
    public function isVendu(): bool
    {
        return $this->vendu;
    }

    /**
     * Set the value of vendu
     */
    public function setVendu(bool $vendu): self
    {
        $this->vendu = $vendu;

        return $this;
    }

    /**
     * Get the value of user_id
     */
    public function getUserId(): int
    {
        return $this->user_id;
    }

    /**
     * Set the value of user_id
     */
    public function setUserId(int $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function jsonSerialize(): mixed
    {
        return [
            "id" => $this->id,
            "titre" => $this->titre,
            "prix" => $this->prix,
            "description" => $this->description,
            "images" => $this->images,
            "vendu" => $this->vendu,
            "user_id" => $this->user_id,
        ];
    }
}
