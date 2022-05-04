<?php

namespace App\Api;

use OpenApi\Attributes as OA;

#[OA\Info(
    title: "API AGENCE",
    version: "1.1",
    description: "Agence immobilieres"
)]
#[OA\Server(
    url: "http://localhost:8000",
    description: "Serveur de test"
)]
class OpenApi
{
}
