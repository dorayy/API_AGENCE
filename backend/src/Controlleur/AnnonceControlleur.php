<?php

namespace App\Controlleur;

use App\Model\AnnonceModel;
use App\Model\MeetupModel;
use Core\Controlleur\DefaultControlleur;

class AnnonceControlleur extends DefaultControlleur
{
    private $model;

    public function __construct()
    {
        $this->model = new AnnonceModel();
    }

    /**
     * Retoure la liste des annonces
     * 
     * @return void
     */
    public function index(): void
    {
        if (isset($_GET["limit"]) && is_string($_GET["limit"])) {
            $this->jsonResponse($this->model->findLast($_GET["limit"]));
        } else {
            $this->jsonResponse($this->model->findAll());
        }
    }

    /**
     * Retourne l'annonce d'id donnée
     * 
     * @return void
     */
    public function single(int $id): void
    {
        $this->jsonResponse($this->model->find($id));
    }

    /**
     * Créer une nouvelle annonce
     * 
     * @return void
     */
    public function save(): void
    {
        $lastId = $this->model->saveAnnonce($_POST);
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
        $this->model->updateAnnonce($id, $_PUT);
        $this->jsonResponse($this->model->find($id));
    }

    /**
     * Supprime l'annonce d'id donnée
     * 
     * @return void
     */
    public function delete(int $id): void
    {
        if ($this->model->delete($id)) {
            $this->jsonResponse("L'annonce a bien été delete");
        } else {
            $this->jsonResponse("La suppréssion de l'annonce a échouer", 400);
        }
    }

    /**
     * Créer un meet up pour l'annonce
     * 
     * @param int id
     * 
     * @return void
     */
    public function meetup(int $id): void
    {
        if (isset($_POST)) {
            $customModel = new MeetupModel();

            $meetup = $_POST;
            $meetup["annonce_id"] = $id;

            $lastId = $customModel->saveMeetup($meetup);
            $this->jsonResponse($customModel->find($lastId));
        } else {
            $this->jsonResponse("Aucune donné pour créer un meet up", 400);
        }
    }
}
