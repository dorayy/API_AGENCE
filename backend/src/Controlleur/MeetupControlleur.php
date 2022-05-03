<?php

namespace App\Controlleur;

use App\Model\AnnonceModel;
use App\Model\MeetupModel;
use Core\Controlleur\DefaultControlleur;

class MeetupControlleur extends DefaultControlleur
{
    private $model;

    public function __construct()
    {
        $this->model = new MeetupModel();
    }

    /**
     * Retoure la liste des meetup
     * 
     * @return void
     */
    public function index(): void
    {
        $this->jsonResponse($this->model->findAll());
    }

    /**
     * Retourne le meetup d'id donnée
     * 
     * @return void
     */
    public function single(int $id): void
    {
        $this->jsonResponse($this->model->find($id));
    }

    /**
     * Update un meetup
     * 
     * @param int $id
     * 
     * @return void
     */
    public function update(int $id, array $_PUT): void
    {
        $this->model->updateMeetup($id, $_PUT);
        $this->jsonResponse($this->model->find($id));
    }

    /**
     * Supprime un meetup
     * 
     * @param int $id
     * 
     * @return void
     */
    public function delete(int $id): void
    {
        if ($this->model->delete($id)) {
            $this->jsonResponse("Le Meetup a bien été delete");
        } else {
            $this->jsonResponse("La suppréssion du meetup a échouer", 400);
        }
    }
}
