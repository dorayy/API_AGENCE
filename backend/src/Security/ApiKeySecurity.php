<?php

namespace App\Security;

use App\Model\UserModel;

class ApiKeySecurity
{

    public static function verifyApiKey(): bool
    {
        if (isset($_GET['apikey']) && !empty($_GET['apikey'])) {
            $userModel = new UserModel();
            if ($userModel->findByApikey($_GET['apikey'])) {
                return true;
            } else {
                http_response_code(403);
                echo json_encode("Vous n'avez pas les droits pour accéder à cette api");
                // self::jsonResponse("Vous n'avez pas les droits pour accéder à cette api", 403);
            }
        } else {
            http_response_code(400);
            echo json_encode("Apikey manquante");
            // self::jsonResponse("Apikey manquante", 400);
        }
        return false;
    }
}
