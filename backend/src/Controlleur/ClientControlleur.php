<?php

namespace App\Controlleur;

use Core\Controlleur\DefaultControlleur;
use App\Model\ClientModel;
use OpenApi\Attributes as OA;

final class ClientControlleur extends DefaultControlleur
{
    public function __construct()
    {
        $this->model = new ClientModel;
    }

    /**
     * Retourne la liste des clients
     * 
     * @return void
     */
    #[OA\Get(
        path: "/api/v2/client",
        summary: "Retourne l'ensemble des clients",
        parameters: [new OA\Parameter(
            name: "apikey",
            in: "query",
            description: "apikey",
            required: true,
        )],
        responses: [
            new OA\Response(
                response: 200,
                description: "Liste des clients",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/Client'
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
        $this->isGranted(self::ADMIN_ROLE);
        $this->jsonResponse($this->model->findAll());
    }

    /**
     * Retourne le client d'id donnée
     * 
     * @param int $id
     * 
     * @return void
     */
    #[OA\Get(
        path: "/api/v2/client/{id}",
        summary: "Retourne une client par son identifiant",
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
                description: "Liste une client",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/Client'
                    )
                )
            )
        ]
    )]
    public function single(int $id): void
    {
        $this->isGranted(self::ADMIN_ROLE);
        $this->jsonResponse($this->model->find($id));
    }


    #[OA\Post(
        path: "/api/v2/client/save",
        parameters: [new OA\Parameter(
            name: "apikey",
            in: "query",
            description: "apikey",
            required: true,
        )],
        requestBody: new OA\RequestBody(
            request: "Ajout d'un client",
            required: true,
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: "company", type: "string"),
                    new OA\Property(property: "apiKey", type: "string"),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: "Liste un client",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/Client'
                    )
                )
            )
        ]
    )]
    public function save($client): void
    {
        $this->isGranted(self::ADMIN_ROLE);
        $apiKey = md5(uniqid());
        $client["apiKey"] = $apiKey;
        $lastId = $this->model->saveClient($client);
        $this->jsonResponse($this->model->find($lastId));
    }
}
