<?php

namespace App\Entity;

use JsonSerializable;
use OpenApi\Attributes as OA;

#[OA\Schema(
    title: "Client",
    description: "Schéma d'un Client"
)]
class Client implements JsonSerializable
{
    #[OA\Property(
        type: "integer",
        nullable: false,
        example: 1
    )]
    private int $id;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: "IPSSI"
    )]
    private string $company;

    #[OA\Property(
        type: "string",
        nullable: false,
        example: '$2y$10$FT4e0uyY2rdJSgyOUMLBeefpL1hO1Lto0hwcM7mbcCBL5aam561DS',
        description: "Ceci n'est pas une vrai clée , contactez l'agence pour vous en procurer"
    )]
    private string $apiKey;

    /*
    * Get the value of id
    */
    public function getId(): int
    {
        return $this->id;
    }

    /*
    * Set the value of id
    */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /*
    * Get the value of company
    */
    public function getCompany(): string
    {
        return $this->company;
    }

    /*
    * Set the value of company
    */
    public function setCompany(string $company): self
    {
        $this->company = $company;

        return $this;
    }

    /*
    * Get the value of apikey
    */
    public function getApikey(): string
    {
        return $this->apikey;
    }

    /*
    * Set the value of apikey
    */
    public function setApikey(string $apikey): self
    {
        $this->apikey = $apikey;

        return $this;
    }
    public function jsonSerialize(): mixed
    {
        return [
            "id" => $this->id,
            "company" => $this->company,
            "apiKey" => $this->apiKey,
        ];
    }
}
