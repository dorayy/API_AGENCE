<?php

use Core\Routeur\Routeur;
use App\Security\ApiKeySecurity;

define("ROOT", dirname(__DIR__));
require ROOT . "/vendor/autoload.php";


// indique quels cliens peuvent se connecté a l'api
// header("Access-Control-Allow-Origin: http://127.0.0.1:8080");
header("Access-Control-Allow-Origin: *");

// indique les headers autorisés par l'api
header("Access-Control-Allow-Headers: content-type, token, Authorization");

// indique les methodes autorisés pour les requêtes http
header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE");

// indique le temps d'éxistance de ces données
header("Access-Controle-Max-Age: 172800");


//if (ApiKeySecurity::verifyApiKey()) {
require ROOT . "/Core/Routeur/Routeur.php";
Routeur::routeur();
//}
