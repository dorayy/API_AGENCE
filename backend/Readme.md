# Install

composer dump-autoload

Penser a instancier une base de donné avec le sql par default proposer dans le dossier /Core/Database.

Le Token par default créer pour l'apikey est 123456

# Start

php -S localhost:8000 -t public

# Utilisation

http://localhost:8000/api/v2/route?apikey=123456

# LISTE DES ROUTES

| Services | Type   | Route                          | Description                                 |
| -------- | ------ | ------------------------------ | ------------------------------------------- |
| user     | GET    | /api/v2/user                   | Recupère tout les utilisateurs              |
| user     | GET    | /api/v2/user/:id               | Recupère l'utilisateur                      |
| user     | GET    | /api/v2/user/:id/annonce       | Recupère les annonces de l'utilisateur      |
| user     | POST   | /api/v2/user/                  | Ajoute l'utilisateur                        |
| user     | PUT    | /api/v2/user/:id               | Update l'utilisateur                        |
| user     | PATCH  | /api/v2/user/:id               | Update l'utilisateur                        |
| user     | DELETE | /api/v2/user/:id               | Delete l'utilisateur                        |
| user     | GET    | /api/v2/user/:id/meetup        | Recupère les meetup d'un utilisateur        |
| annonce  | GET    | /api/v2/annonce                | Recupère toute les annonces                 |
| annonce  | GET    | /api/v2/annonce?limit=x        | Recupère les x dernieres annonces           |
| annonce  | GET    | /api/v2/annonce/:id            | Recupère l'annonce                          |
| annonce  | POST   | /api/v2/annonce/               | Ajoute une annonce                          |
| annonce  | PUT    | /api/v2/annonce/:id            | Update l'annonce                            |
| annonce  | PATCH  | /api/v2/annonce/:id            | Update l'annonce                            |
| annonce  | DELETE | /api/v2/annonce/:id            | Delete l'annonce                            |
| annonce  | POST   | /api/v2/annonce/:id/meetup     | Ajoute un meetup                            |
| annonce  | POST   | /api/v2/annonce/:id/emailagent | Récupère un agent grace à l'id de l'annonce |
| meetup   | GET    | /api/v2/meetup                 | Recupère tout les meetup                    |
| meetup   | GET    | /api/v2/meetup/:id             | Recupère un meetup                          |
| meetup   | PUT    | /api/v2/meetup/:id             | Update un meetup                            |
| meetup   | PATCH  | /api/v2/meetup/:id             | Update un meetup                            |
| meetup   | DELETE | /api/v2/meetup/:id             | Delete un meetup                            |
| client   | GET    | /api/v2/client                 | Recupère tout les client                    |
| client   | GET    | /api/v2/client/:id             | Recupère un client                          |
| client   | PUT    | /api/v2/client/:id             | Update un client                            |
| client   | PATCH  | /api/v2/client/:id             | Update un client                            |
| client   | DELETE | /api/v2/client/:id             | Delete un client                            |
