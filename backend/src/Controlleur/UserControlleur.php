<?php

namespace App\Controlleur;

use App\Model\AnnonceModel;
use App\Model\MeetupModel;
use App\Model\UserModel;
use App\Security\JwTokenSecurity;
use Core\Controlleur\DefaultControlleur;

class UserControlleur extends DefaultControlleur
{
    private $model;

    public function __construct()
    {
        $this->model = new UserModel();
    }

    /**
     * Retoure la liste des utilisateurs
     * 
     * @return void
     */
    public function index(): void
    {
        $this->jsonResponse($this->model->findAll());
    }

    /**
     * Retourne l'utilisateur d'id donnée
     * 
     * @return void
     */
    public function single(int $id): void
    {
        $this->jsonResponse($this->model->find($id));
    }

    /**
     * Update un utilisateur
     * 
     * @param int $id
     * 
     * @return void
     */
    public function update(int $id, array $_PUT): void
    {
        $this->model->updateUser($id, $_PUT);
        $this->jsonResponse($this->model->find($id));
    }

    public function loginDoray(): void
    {
        $apikey = md5(uniqid());

        $this->model->login($_POST, $apikey);
    }

    /**
     * Supprime un utilisateur
     * 
     * @param int $id
     * 
     * @return void
     */
    public function delete(int $id): void
    {
        if ($this->model->delete($id)) {
            $this->jsonResponse("L'utilisateur a bien été delete");
        } else {
            $this->jsonResponse("La suppréssion de l'utilisateur a échouer", 400);
        }
    }

    /**
     * Retourne les annonces d'un utilisateur
     * 
     * @param int $id
     * 
     * @return void
     */
    public function annonce(int $id): void
    {
        $customModel = new AnnonceModel();
        $this->jsonResponse($customModel->findByUserId($id));
    }

    /**
     * Retourne les meet up
     */
    public function meetup(int $id): void
    {
        $this->isGranted(self::USER_ROLE);
        $customAnnonceModel = new AnnonceModel();
        $customMeetupModel = new MeetupModel();
        $annonces = $customAnnonceModel->findByUserId($id);
        $meetups = [];
        foreach ($annonces as $annonce) {
            $submeetups = $customMeetupModel->findByAnnonceId($annonce->getId());
            array_push($meetups, $submeetups);
        }

        $this->jsonResponse($meetups);
    }

    /**
     * Créer un nouvelle utilisateur
     * 
     * @return void
     */
    public function save(): void
    {
        if (isset($_POST["username"], $_POST["email"], $_POST["password"])) {
            $user = $_POST;
            $user["password"] = password_hash($user["password"], PASSWORD_DEFAULT);
            $user["roles"] = 0;
            $lastId = $this->model->saveUser($user);
            $this->jsonResponse($this->model->find($lastId));
        }
    }

    /**
     * Se connecter
     * 
     * @param array $userData
     * 
     * @return void
     */
    public function login(array $userData): void
    {
        // vérifier qu'on a bien le password
        $user = $this->model->getUserByEmail($userData["email"]);
        if ($user) {
            var_dump($user->getPassword());
            if (password_verify($userData["password"], $user->getPassword())) {
                // génération du jwt token
                $this->jsonResponse((new JwTokenSecurity)->generateToken($user->jsonSerialize()));
            } else {
                $this->jsonResponse("Mot de passe incorrect", 400);
            }
        } else {
            $this->jsonResponse("Cet utilisateur n'éxiste pas", 400);
        }
    }
}
