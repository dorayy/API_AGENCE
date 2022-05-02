<?php

namespace App\Controlleur;

use App\Model\UserModel;
use Core\Controller\DefaultControlleur;

class ArticleControlleur extends DefaultControlleur
{
    private $model;

    public function __construct()
    {
        $this->model = new UserModel();
    }

    /**
     * Retoure la liste des articles
     * 
     * @return void
     */
    public function index(): void
    {
        $this->jsonResponse($this->model->findAll());
    }

    /**
     * Retourne l'article d'id donnée
     * 
     * @return void
     */
    public function single(int $id): void
    {
        $this->jsonResponse($this->model->find($id));
    }

    /**
     * Créer un nouvelle article
     * 
     * @return void
     */
    public function save(): void
    {
        $lastId = $this->model->saveUser($_POST);
        $this->jsonResponse($this->model->find($lastId));
    }
}
