<?php

namespace Core\Controlleur;

use App\Security\JwTokenSecurity;
use Core\Traits\JsonTrait;

/**
 * @method void jsonResponse(mixed $data, int $code = 200) Envoie les données passées en paramêtre au format json
 */
class DefaultControlleur
{
    use JsonTrait;

    protected const USER_ROLE = 0;
    protected const ADMIN_ROLE = 1;

    public function isGranted(string $role): ?array
    {
        $user = (new JwTokenSecurity())->decodeToken();

        // si l'utilisateur n'est pas au minimum le role i alors il n'as pas les droits
        if (!($user["roles"] >= $role)) {
            throw new \Exception("Vous n'avez pas les droits pour effectué cette opération", 403);
        }

        return $user;
    }
}
