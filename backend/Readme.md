# Install

composer dump-autoload

# Start

php -S localhost:8000 -t public

# LISTE DES ROUTES

| Services | Type   | Route                      | Description                            |
| -------- | ------ | -------------------------- | -------------------------------------- |
| user     | GET    | /api/v2/user               | Recupère tout les utilisateurs         |
| user     | GET    | /api/v2/user/:id           | Recupère l'utilisateur                 |
| user     | GET    | /api/v2/user/:id/annonce   | Recupère les annonces de l'utilisateur |
| user     | POST   | /api/v2/user/              | Ajoute l'utilisateur                   |
| user     | PUT    | /api/v2/user/:id           | Update l'utilisateur                   |
| user     | PATCH  | /api/v2/user/:id           | Update l'utilisateur                   |
| user     | DELETE | /api/v2/user/:id           | Delete l'utilisateur                   |
| user     | GET    | /api/v2/user/:id/meetup    | Recupère les meetup d'un utilisateur   |
| annonce  | GET    | /api/v2/annonce            | Recupère toute les annonces            |
| annonce  | GET    | /api/v2/annonce?limit=x    | Recupère les x dernieres annonces      |
| annonce  | GET    | /api/v2/annonce/:id        | Recupère l'annonce                     |
| annonce  | POST   | /api/v2/annonce/           | Ajoute une annonce                     |
| annonce  | PUT    | /api/v2/annonce/:id        | Update l'annonce                       |
| annonce  | PATCH  | /api/v2/annonce/:id        | Update l'annonce                       |
| annonce  | DELETE | /api/v2/annonce/:id        | Delete l'annonce                       |
| annonce  | POST   | /api/v2/annonce/:id/meetup | Ajoute un meetup                       |
| meetup   | GET    | /api/v2/annonce            | Recupère tout les meetup               |
| meetup   | GET    | /api/v2/annonce/:id        | Recupère un meetup                     |
| meetup   | PUT    | /api/v2/annonce/:id        | Update un meetup                       |
| meetup   | PATCH  | /api/v2/annonce/:id        | Update un meetup                       |
| meetup   | DELETE | /api/v2/annonce/:id        | Delete un meetup                       |