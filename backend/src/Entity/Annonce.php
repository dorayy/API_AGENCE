<?php

namespace App\Entity;

use JsonSerializable;

class Annonce
implements JsonSerializable
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

    public function jsonSerialize(): mixed
    {
        return [
            "id" => $this->id,
            "titre" => $this->titre,
            "prix" => $this->prix,
            "description" => $this->description,
            "images" => $this->images,
            "vendu" => $this->vendu,
        ];
    }
}
