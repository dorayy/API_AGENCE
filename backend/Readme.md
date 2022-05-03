# Install 

composer dump-autoload

# Start 

php -S localhost:8000 -t public

# LISTE DES ROUTES

GET /api/v2/user                    Recupère tout les utilisateurs
GET /api/v2/user/:id                Recupère l'utilisateur d'id :id
GET /api/v2/user/:id/annonce        Recupère les annonces de l'utilisateur d'id :id
POST /api/v2/user/                  Ajoute l'utilisateur d'id :id
PUT /api/v2/user/:id                Update l'utilisateur d'id :id
PATCH /api/v2/user/:id              Update l'utilisateur d'id :id
DELETE /api/v2/user/:id             Delete l'utilisateur d'id :id

GET /api/v2/annonce                 Recupère toute les annonces
GET /api/v2/annonce?limit=x         Recupère les x dernieres annonces
GET /api/v2/annonce/:id             Recupère l'annonce d'id :id
POST /api/v2/annonce/               Ajoute une annonce
PUT /api/v2/annonce/:id             Update l'annonce d'id :id
PATCH /api/v2/annonce/:id           Update l'annonce d'id :id
DELETE /api/v2/annonce/:id          Delete l'annonce d'id :id