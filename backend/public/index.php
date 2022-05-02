<?php

define("ROOT", dirname(__DIR__));
require ROOT . "/vendor/autoload.php";

// (new CategorieControlleur)->index();
// (new ArticleControlleur)->index();
// (new CategorieControlleur)->single(1);
// (new ArticleControlleur)->single(1);

if (isset($_SERVER["PATH_INFO"])) {
    $path = explode("/", $_SERVER["PATH_INFO"]);
    if (isset($path[1]) && $path[1] == "api") {
        if (isset($path[2]) && $path[2] == "v1") {
            if (isset($path[3])) {
                $controlleurName = "App\Controlleur\\" . ucfirst($path[3]) . "Controlleur";
                $controlleur = new $controlleurName();

                if (isset($path[4]) && is_numeric($path[4])) {
                    $controlleur->single($path[4]);
                } elseif (isset($path[4]) && is_string($path[4])) {
                    $method = $path[4];
                    $controlleur->$method();
                } else {
                    $controlleur->index();
                }
            }
        }
    }
} else {
    echo "La donné que vous recherchez n'éxiste pas";
}
