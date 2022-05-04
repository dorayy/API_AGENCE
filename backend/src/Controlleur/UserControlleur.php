<?php

namespace App\Controlleur;

use App\Model\AnnonceModel;
use App\Model\MeetupModel;
use App\Model\UserModel;
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
     * Créer un nouvelle utilisateur
     * 
     * @return void
     */
    public function save(): void
    {
        $lastId = $this->model->saveUser($_POST);
        $this->jsonResponse($this->model->find($lastId));
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

    public function login(): void
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
        $customAnnonceModel = new AnnonceModel();
        $customMeetupModel = new MeetupModel();
        $annonces = $customAnnonceModel->findByUserId($id);
        $this->jsonResponse($annonces[0]->getId());
        $meetups = [];
        foreach ($annonces as $annonce) {
            $submeetups = $customMeetupModel->findByAnnonceId($annonce->getId());
            array_push($meetups, $submeetups);
        }

        $this->jsonResponse($meetups);
    }
}
