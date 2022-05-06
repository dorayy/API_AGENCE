<?php

namespace App\Entity;

use JsonSerializable;
use OpenApi\Attributes as OA;

#[OA\Schema(
    title: "Annonce",
    description: "Schéma d'une Annonce"
)]
class Annonce implements JsonSerializable
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
        example: "Annonce n°1"
    )]
    private string $titre;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "250 000 €"
    )]
    private float $prix;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at accumsan libero. Nunc ac turpis eget sem auctor commodo. Aliquam eros enim, tempus eget consequat sit amet,"
    )]
    private string $description;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    )]
    private string $images;

    #[OA\Property(
        type: "int",
        nullable: false,
        example: 0
    )]
    private bool $vendu;

    #[OA\Property(
        type: "integer",
        nullable: false,
        example: 2
    )]
    private int $user_id;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "Maison"
    )]
    private string $type_bien;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "Achat"
    )]
    private string $type_contrat;

    #[OA\Property(
        type: "integer",
        nullable: false,
        example: 25
    )]
    private string $superficie;

    #[OA\Property(
        type: "array",
        nullable: false,
        example: [
            "jardin" => false,
            "cheminer" => false,
            "balcon" => true
        ]
    )]
    private string $options;

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
    /**
     * Get the value of type_contrat
     */
    public function getTypeContrat(): string
    {
        return $this->type_contrat;
    }

    /**
     * Set the value of type_contrat
     */
    public function setTypeContrat(string $type_contrat): self
    {
        $this->type_contrat = $type_contrat;

        return $this;
    }

    /**
     * Get the value of type_bien
     */
    public function getTypeBien(): string
    {
        return $this->type_bien;
    }

    /**
     * Set the value of type_bien
     */
    public function setTypeBien(string $type_bien): self
    {
        $this->type_bien = $type_bien;

        return $this;
    }

    /**
     * Get the value of id
     */
    public function getSuperficie(): int
    {
        return $this->superficie;
    }

    /**
     * Set the value of id
     */
    public function setSuperficie(int $superficie): self
    {
        $this->superficie = $superficie;

        return $this;
    }

    public function getOptions()
    {
        $options = json_decode($this->options, true);
        return $options;
    }

    public function setOptions(string $options): self
    {
        $this->options = $options;

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
            "type_bien" => $this->type_bien,
            "type_contrat" => $this->type_contrat,
            "superficie" => $this->superficie,
            "options" => $this->getOptions()
        ];
    }
}
