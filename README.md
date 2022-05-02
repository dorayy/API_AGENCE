# Projet Agence immobilière

groupe🧮
Doray Balassoupramanien
Maxime Cordeiro
Esteban Gonzalez
Louis Poulin

## Ce projet consiste à créer un site pour une agence immobilière

Une agence immobilière vous contacte pour réaliser un site web afin qu'ils puissent proposer à leurs clients une vitrine présentant l'ensemble des biens disponibles et un système de prise de rendez-vous.

Ce site a besoin également d'une partie administration pour les agents immobiliers afin qu'ils puissent gérer les biens dont ils possèdent les mandats et gérer leurs rendez-vous.

Un super admin(le gérant de l'agence) aura quant à lui accès à tous les biens et pourra créer des utilisateurs

## Les pages

### Page d'accueil

Pour ce projet, vous devrez réaliser une page d'accueil présentant l'entreprise et les 5 derniers biens ajoutés. Il y aura également sur cette page des liens permettant d'arriver sur la page des biens avec un filtre déjà en place (N'afficher que les appartements, que les maisons, les biens disponible à l'achat ou à la location).

Chaque bien a un bouton voir plus pour accéder à la page du bien.

### Page des biens

Cette page liste tous les biens que possède l'agence et qui sont encore disponible.

Sur cette page il y a des filtres pour trier les biens en fonction des recherces des utilisateurs (appartement/maison, location/achat, tranche de prix, tranche de superficie, nombre de pièces, ...)

Cette page possède une pagination. Les biens sont divisés en groupes de 10 ou 20 comme vous le souhaitez.

Chaque bien a un bouton voir plus pour accéder à la page du bien.

## Page d'un bien

Au clic sur un bien on arrive sur sa page.

Celle-ci va afficher toutes les photos du bien, ses informations et les options qui sont liées (piscine, balcon, terrasse, cheminée, ...)

Sur cette page on retrouve également un formulaire de contact possédant un input pour une date de rendez-vous. Ce formulaire va envoyer un mail à l'agent immobilier gérant le bien et stocker ce rdv en base de données (on ne gère pas le planning dans ce tp, ce n'est pas grave s'il y a 2 rendez-vous en même temps).

## Connexion

Les agents immobiliers peuvent se connecter. Ils pourront ainsi ajouter un bien, modifier les biens qu'ils gèrent, mettre un bien en vendu ou loué, le supprimer.
Ils pourront également consulter leurs rendez-vous, et les annuler au besoin.

## Inscription

Seul le gérant de l'agence peut inscrire des personnes. Il inscrira les agents immobiliers ou d'autres personnes. Il attribue les rôles aux utilisateurs.

## Les rôles

### Anonyme

Les clients ne s'inscrivent pas et peuvent consulter les biens et envoyer une demande de visite

### ROLE_USER

Ce rôle est dédié aux agents immobiliers. Ils peuvent consulter les biens, ajouter des biens et gérer les biens qui leurs sont attribués: mise à jour, suppression, marqué comme vendu ou loué.
Ils peuvent également consulter et gérer leurs render-vous.

Un agent immobilier peut également se rendre sur sa fiche pour modifier son mot de passe et ses informations.

### ROLE_ADMIN

C'est le gérant de l'agence.

Il voit tous les biens et peut tous les gérer.
Il peut inscrire des collaborateurs et gérer les comptes (modification d'information, suppresion de compte, ...)
