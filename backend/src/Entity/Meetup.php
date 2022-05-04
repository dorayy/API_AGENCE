<?php

namespace App\Entity;

use DateTime;
use JsonSerializable;

class Meetup implements JsonSerializable
{
    private int $id;
    private int $date;
    private int $annonce_id;
    private string $email;
    private string $telephone;
    private string $nom;
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
