<?php

namespace App\Controlleur;

use App\Model\AnnonceModel;
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
        $this->jsonResponse($this->model->findAll());
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
     * Supprime l'annonce d'id donnée
     * 
     * @return void
     */
    public function delete(): void
    {
        $lastId = $this->model->deleteAnnonce($_POST);
        $this->jsonResponse($this->model->find($lastId));
    }
}
