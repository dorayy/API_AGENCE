<?php

namespace App\Controlleur;

use App\Model\AnnonceModel;
use App\Model\MeetupModel;
use Core\Controlleur\DefaultControlleur;
use OpenApi\Attributes as OA;


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
    #[OA\Get(
        path: "/api/v2/annonce",
        summary: "Retourne l'ensemble des annonces",
        parameters: [new OA\Parameter(
            name: "apikey",
            in: "query",
            description: "apikey",
            required: true,
        )],
        responses: [
            new OA\Response(
                response: 200,
                description: "Liste des annonces",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/Annonce'
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
    #[OA\Get(
        path: "/api/v2/annonce/{id}",
        summary: "Retourne une annonce par son identifiant",
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
                description: "Liste une annonce",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/Annonce'
                    )
                )
            )
        ]
    )]
    public function single(int $id): void
    {
        $this->jsonResponse($this->model->find($id));
    }

    /**
     * Créer une nouvelle annonce
     * 
     * @return void
     */
    #[OA\Post(
        path: "/api/v2/annonce/save",
        parameters: [new OA\Parameter(
            name: "apikey",
            in: "query",
            description: "apikey",
            required: true,
        )],
        requestBody: new OA\RequestBody(
            request: "Ajout d'une annonce",
            required: true,
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: "titre", type: "string"),
                    new OA\Property(property: "prix", type: "string"),
                    new OA\Property(property: "description", type: "string"),
                    new OA\Property(property: "images", type: "string"),
                    new OA\Property(property: "vendu", type: "int"),
                    new OA\Property(property: "user_id", type: "int"),
                    new OA\Property(property: "type_bien", type: "string"),
                    new OA\Property(property: "type_contrat", type: "string"),

                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: "Liste une annonce",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/Annonce'
                    )
                )
            )
        ]
    )]
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

    #[OA\Put(
        path: "/api/v2/annonce/{id}/update",
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
            request: "Maj d'une annonce",
            required: true,
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: "titre", type: "string"),
                    new OA\Property(property: "prix", type: "string"),
                    new OA\Property(property: "description", type: "string"),
                    new OA\Property(property: "images", type: "string"),
                    new OA\Property(property: "vendu", type: "int"),
                    new OA\Property(property: "user_id", type: "int"),
                    new OA\Property(property: "type_bien", type: "string"),
                    new OA\Property(property: "type_contrat", type: "string"),
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
                        ref: '#/components/schemas/Annonce'
                    )
                )
            )
        ]
    )]
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

    #[OA\Delete(
        path: "/api/v2/annonce/{id}/delete",
        summary: "Supprime une annonce par son identifiant",
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
