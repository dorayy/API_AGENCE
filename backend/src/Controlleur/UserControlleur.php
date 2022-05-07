<?php

namespace App\Controlleur;

use App\Model\AnnonceModel;
use App\Model\MeetupModel;
use App\Model\UserModel;
use App\Security\JwTokenSecurity;
use Core\Controlleur\DefaultControlleur;
use OpenApi\Attributes as OA;

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

    #[OA\Get(
        path: "/api/v2/user",
        summary: "Retourne l'ensemble des utilisateurs",
        tags: ["User"],
        parameters: [new OA\Parameter(
            name: "apikey",
            in: "query",
            description: "apikey",
            required: true,
        )],
        responses: [
            new OA\Response(
                response: 200,
                description: "Liste des utilisateurs",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/User'
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
     * Retourne l'utilisateur d'id donnée
     * 
     * @return void
     */

    #[OA\Get(
        path: "/api/v2/user/{id}",
        summary: "Retourne un utilisateur par son identifiant",
        tags: ["User"],
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
                description: "Liste l'utilisateur",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/User'
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

    /**
     * Update un utilisateur
     * 
     * @param int $id
     * 
     * @return void
     */

    #[OA\Put(
        path: "/api/v2/user/{id}/update",
        tags: ["User"],
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
            request: "Maj de l'user",
            required: true,
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: "username", type: "string"),
                    new OA\Property(property: "email", type: "string"),
                    new OA\Property(property: "roles", type: "int"),

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
        $user = $this->isGranted(self::USER_ROLE);
        if ($user["id"] = $id) {
            $this->model->updateUser($id, $_PUT);
            $this->jsonResponse($this->model->find($id));
        } else {
            $this->jsonResponse("Vous n'êtes pas l'utilisateur modifié", 400);
        }
    }

    /**
     * Supprime un utilisateur
     * 
     * @param int $id
     * 
     * @return void
     */

    #[OA\Delete(
        path: "/api/v2/user/{id}/delete",
        summary: "Supprime un utilisateur par son identifiant",
        tags: ["User"],
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
        $this->isGranted(self::ADMIN_ROLE);
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
        $user = $this->isGranted(self::USER_ROLE);
        if ($user["id"] = $id) {
            $customModel = new AnnonceModel();
            $this->jsonResponse($customModel->findByUserId($id));
        } else {
            $this->jsonResponse("Vous n'êtes pas l'utilisateur concerné", 400);
        }
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

    #[OA\Post(
        path: "/api/v2/user/save",
        tags: ["User"],
        parameters: [new OA\Parameter(
            name: "apikey",
            in: "query",
            description: "apikey",
            required: true,
        )],
        requestBody: new OA\RequestBody(
            request: "Ajout d'un user",
            required: true,
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: "username", type: "string"),
                    new OA\Property(property: "email", type: "string"),
                    new OA\Property(property: "roles", type: "string"),
                    new OA\Property(property: "password", type: "string")
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: "Retourne un utilisateur",
                content: new OA\JsonContent(
                    type: 'array',
                    items: new OA\Items(
                        ref: '#/components/schemas/User'
                    )
                )
            )
        ]
    )]
    public function save(): void
    {
        $this->isGranted(self::ADMIN_ROLE);
        if (isset($_POST["username"], $_POST["email"], $_POST["password"])) {
            $user = $_POST;
            $user["password"] = password_hash($user["password"], PASSWORD_DEFAULT);
            $user["roles"] = 0;
            $lastId = $this->model->saveUser($user);
            $this->jsonResponse($this->model->find($lastId));
        } else {
            $this->jsonResponse("Pas assez de donnée", 400);
        }
    }

    /**
     * Connexion de l'utilisateur
     * 
     * @param array $userData
     * 
     * @return void
     */
    #[OA\Post(
        path: "/api/v2/user/login",
        tags: ["User"],
        parameters: [new OA\Parameter(
            name: "apikey",
            in: "query",
            description: "apikey",
            required: true,
        )],
        requestBody: new OA\RequestBody(
            request: "Connexion d'un utilisateur",
            required: true,
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: "email", type: "string"),
                    new OA\Property(property: "password", type: "string"),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: "Connected"
            )
        ]
    )]
    public function login(array $userData): void
    {
        // vérifier qu'on a bien le password
        $user = $this->model->getUserByEmail($userData["email"]);
        if ($user) {
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


    #[OA\Put(
        path: "/api/v2/user/{id}/updatemyinfos",
        tags: ["User"],
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
            request: "Maj de l'user",
            required: true,
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: "username", type: "string"),
                    new OA\Property(property: "email", type: "string"),
                    new OA\Property(property: "password", type: "string"),

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
                        ref: '#/components/schemas/User'
                    )
                )
            )
        ]
    )]
    public function updatemyinfos(int $id, array $_PUT): void
    {
        $user = $this->isGranted(self::USER_ROLE);
        if ($user["id"] = $id) {
            $_PUT["password"] = password_hash($_PUT["password"], PASSWORD_DEFAULT);
            $this->model->updateMyInfos($id, $_PUT);
            $this->jsonResponse($this->model->find($id));
        } else {
            $this->jsonResponse("Vous n'êtes pas l'utilisateur modifié", 400);
        }
    }
}
