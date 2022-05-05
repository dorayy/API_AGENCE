<?php

namespace App\Entity;

use DateTime;
use JsonSerializable;
use OpenApi\Attributes as OA;

#[OA\Schema(
    title: "Meetup",
    description: "Schéma d'un Meetup"
)]
class Meetup implements JsonSerializable
{
    #[OA\Property(
        type: "integer",
        nullable: false,
        example: 1
    )]
    private int $id;
    // timestamps
    #[OA\Property(
        type: "datetime",
        nullable: false,
        example: "2022-05-04 23:22:33.419154"
    )]
    private int $date;

    #[OA\Property(
        type: "integer",
        nullable: false,
        example: 1
    )]
    private int $annonce_id;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "contact@agence.com"
    )]
    private string $email;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "0102030405"
    )]
    private string $telephone;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "AGENCE"
    )]
    private string $nom;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "AGENCE"
    )]
    private string $prenom;

    public function jsonSerialize(): mixed
    {
        return [
            "id"  => $this->id,
            "date" => $this->date,
            "annonce_id" => $this->annonce_id,
            "email" => $this->email,
            "telephone" => $this->telephone,
            "nom" => $this->nom,
            "prenom" => $this->prenom,
        ];
    }
}
