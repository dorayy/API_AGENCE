<?php

namespace App\Controlleur;

use App\Model\AnnonceModel;
use App\Model\MeetupModel;
use Core\Controlleur\DefaultControlleur;
use OpenApi\Attributes as OA;

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
    #[OA\Get(
        path: "/api/v2/meetup",
        summary: "Retourne l'ensemble des meetups",
        parameters: [new OA\Parameter(
            name: "apikey",
            in: "query",
            description: "apikey",
            required: true,
        )],
        responses: [
            new OA\Response(
                response: 200,
                description: "Liste les meetups",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/Meetup'
                    )
                )
            ),
            new OA\Response(
                response: 404,
                description: "Not Found",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(
                            property: "message",
                            type: "string",
                            example: "Route not found"
                        )
                    ]
                )
            )
        ]
    )]
    public function index(): void
    {
        $user = $this->isGranted(self::ADMIN_ROLE);
        $this->jsonResponse($this->model->findAll());
    }

    /**
     * Retourne le meetup d'id donnée
     * 
     * @return void
     */

    #[OA\Get(
        path: "/api/v2/meetup/{id}",
        summary: "Retourne un meetup par son identifiant",
        parameters: [new OA\Parameter(
            name: "id",
            in: "path",
            description: "id",
            required: true,

        ), new OA\Parameter(
            name: "apikey",
            in: "query",
            description: "apikey",
            required: true,
        )],
        responses: [
            new OA\Response(
                response: 200,
                description: "Liste un meetup",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/Meetup'
                    )
                )
            )
        ]
    )]
    public function single(int $id): void
    {
        $user = $this->isGranted(self::USER_ROLE);
        $this->jsonResponse($this->model->find($id));
    }

    /**
     * Update un meetup
     * 
     * @param int $id
     * 
     * @return void
     */
    #[OA\Put(
        path: "/api/v2/meetup/{id}/update",
        parameters: [
            new OA\Parameter(
                name: "id",
                in: "path",
                description: "id",
                required: true,

            ), new OA\Parameter(
                name: "apikey",
                in: "query",
                description: "apikey",
                required: true,
            )
        ],
        requestBody: new OA\RequestBody(
            request: "Maj d'un meetup",
            required: true,
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: "email", type: "string"),
                    new OA\Property(property: "telephone", type: "string"),
                    new OA\Property(property: "nom", type: "int"),
                    new OA\Property(property: "prenom", type: "int"),
                    new OA\Property(property: "date", type: "int")
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: "Mis à jour",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/Meetup'
                    )
                )
            )
        ]
    )]
    public function update(int $id, array $_PUT): void
    {
        $user = $this->isGranted(self::USER_ROLE);
        $meetup = $this->model->find($id);

        $customAnnonceModel = new AnnonceModel();
        $annonce = $customAnnonceModel->find($meetup->getAnnonceId());

        if ($annonce->getUserId() == $user["id"]) {
            $this->model->updateMeetup($id, $_PUT);
            $this->jsonResponse($this->model->find($id));
        } else {
            $this->jsonResponse("Vous ne pouvez pas delete ce meetup", 400);
        }
    }

    /**
     * Supprime un meetup
     * 
     * @param int $id
     * 
     * @return void
     */
    #[OA\Delete(
        path: "/api/v2/meetup/{id}/delete",
        summary: "Supprime un meetup par son identifiant",
        parameters: [new OA\Parameter(
            name: "id",
            in: "path",
            description: "id",
            required: true,

        ), new OA\Parameter(
            name: "apikey",
            in: "query",
            description: "apikey",
            required: true,
        )],
        responses: [
            new OA\Response(
                response: 200,
                description: "Supprimé"
            ),
            new OA\Response(
                response: 404,
                description: "Not Found"
            )
        ]
    )]
    public function delete(int $id): void
    {
        $user = $this->isGranted(self::USER_ROLE);
        $meetup = $this->model->find($id);

        $customAnnonceModel = new AnnonceModel();
        $annonce = $customAnnonceModel->find($meetup->getAnnonceId());

        if ($annonce->getUserId() == $user["id"]) {
            if ($this->model->delete($id)) {
                $this->jsonResponse("Le Meetup a bien été delete");
            } else {
                $this->jsonResponse("La suppréssion du meetup a échouer", 400);
            }
        } else {
            $this->jsonResponse("Vous ne pouvez pas delete ce meetup", 400);
        }
    }
}
