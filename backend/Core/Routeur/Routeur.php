<?php

namespace Core\Routeur;

class Routeur
{
    public static function routeur()
    {
        if (isset($_SERVER["PATH_INFO"])) {
            $path = explode("/", $_SERVER["PATH_INFO"]);
            if (isset($path[1]) && $path[1] == "api" && isset($path[2]) && $path[2] == "v2") {
                if (isset($path[3])) {
                    $controlleurName = "App\Controlleur\\" . ucfirst($path[3]) . "Controlleur";
                    $controlleur = new $controlleurName();
                    $id = null;
                    if (isset($path[4]) && is_numeric($path[4])) {
                        $id = $path[4];
                    }

                    switch ($_SERVER["REQUEST_METHOD"]) {
                        case 'GET':
                            if (isset($path[5]) && is_string($path[5])) {
                                $method = $path[5];
                                $controlleur->$method($id);
                            } else {
                                if ($id) {
                                    $controlleur->single($id);
                                } else {
                                    $controlleur->index();
                                }
                            }
                            break;
                        case 'POST':
                            if (!empty($_POST)) {
                                if (isset($path[5]) && is_string($path[5])) {
                                    $method = $path[5];
                                    $controlleur->$method($id);
                                } else {
                                    if (isset($path[4]) && is_string($path[4])) {
                                        $method = $path[2];

                                        if (method_exists($controlleur, $method)) {
                                            $controlleur->$method($_POST);
                                        } else {
                                            throw new \Exception("La méthode $method n'existe pas", 404);
                                        }
                                    } else {
                                        $controlleur->save($_POST);
                                    }
                                }
                            } else {
                                throw new \Exception("Données manquantes pour l'ajout en BDD", 400);
                            }
                            break;
                        case 'PUT':
                            parse_str(file_get_contents("php://input"), $_PUT);
                            if ($id && !empty($_PUT)) {
                                $controlleur->update($id, $_PUT);
                            } else {
                                throw new \Exception("Erreur lors de la modification, il mannque des informations", 400);
                            }
                            break;
                        case 'PATCH':
                            parse_str(file_get_contents("php://input"), $_PATCH);
                            if ($id && !empty($_PATCH)) {
                                $controlleur->update($id, $_PATCH);
                            } else {
                                throw new \Exception("Erreur lors de la modification, il mannque des informations", 400);
                            }
                            break;
                        case 'DELETE':
                            if ($id) {
                                $controlleur->delete($id);
                            } else {
                                throw new \Exception("ID manquant", 400);
                            }
                            break;
                    };
                }
            }
        } else {
            throw new \Exception("No route matched", 400);
        }
    }
}
