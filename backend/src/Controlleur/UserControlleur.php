<?php

namespace App\Controlleur;

use App\Model\AnnonceModel;
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
}
