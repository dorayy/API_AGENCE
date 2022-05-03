<?php

use Core\Routeur\Routeur;

define("ROOT", dirname(__DIR__));
require ROOT . "/vendor/autoload.php";
require ROOT . "/Core/Routeur/Routeur.php";

use Core\Traits\DotEnv;

(new DotEnv(ROOT . '/.env'))->load();

echo $_ENV['DATABASE_HOST'];


// (new CategorieControlleur)->index();
// (new ArticleControlleur)->index();
// (new CategorieControlleur)->single(1);
// (new ArticleControlleur)->single(1);

// indique les headers autorisés par l'api
header("Access-Control-Allow-Headers: content-type, token, Authorization");

// indique les methodes autorisés pour les requêtes http
header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE");

// indique le temps d'éxistance de ces données
header("Access-Controle-Max-Age: 172800");

Routeur::routeur();
