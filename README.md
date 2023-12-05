# AWP_FinalProject Informations


# Structure

e-commerce/
|-- frontend/
|   |-- assets/
|   |    |-- styles.css
|   |-- components/
|   |   |-- auth/
|   |   |   |-- Login.vue
|   |   |   |-- Register.vue
|   |   |-- admin/
|   |   |   |-- ManageProduct.vue
|   |   |-- user/
|   |   |   |-- ProductList.vue
|   |   |   |-- MyCard.vue
|   |   |   |-- UserProfile.vue
|   |-- views/
|   |   |-- GuestView.vue
|   |   |-- UserView.vue
|   |   |-- AdminView.vue
|   |-- store/
|   |   |-- index.js
|   |-- router/
|   |   |-- index.js
|   |-- App.vue
|   |-- main.js
|-- package.json
|-- .gitignore
|-- README.md



backend/
|-- config/
|   |-- db.config.js
|   |-- middleware/
|       |-- authMiddleware.js
|-- controllers/
|   |-- product.controller.js
|   |-- user.controller.js
|-- models/
|   |-- product.model.js
|   |-- user.model.js
|-- routes/
|   |-- product.routes.js
|   |-- user.routes.js
|-- tests/
|   |-- unit/
|       |-- example.test.js
|-- server.js
|-- package.json
|-- .gitignore
|-- README.md




-------
general (pas sûr)
e-commerce/
|-- docs/
|   |-- API.md
|   |-- Setup.md
|-- docker/
|   |-- Dockerfile
|   |-- docker-compose.yml
|-- scripts/
|   |-- pre-commit
|-- .env
|-- .gitignore
|-- README.md
|-- package.json


-------------------------------------

# Repartition des tâches :

## Frontend

Développeur 1:

    Création des composants spécifiques à l'authentification (Login, Register).
    Mise en place des vues liées à l'interface utilisateur du client (GuestView, UserView, AdminView).

Développeur 2:

    Création des composants spécifiques à l'administration (ManageProduct, AdminView).
    Mise en place des vues utilisateur (ProductList, MyCard, UserProfile).

Développeur 3:

    Intégration de Vue Router avec les vues et composants associés.
    Gestion des actions et mutations Vuex liées à l'interface utilisateur.
    Mise en place de l'intégration avec le backend à l'aide d'Axios.
    Gestion de l'interaction avec l'API pour récupérer et afficher les données.


## Backend (Node.js avec Express et MySQL):

Développeur 1:
    Responsabilités:
        Mise en place du serveur Express.
        Configuration initiale du projet backend.
        Définition des schémas des modèles (product.model.js, user.model.js).
        Configuration de la connexion à la base de données dans db.config.js.

Développeur 2:
    Responsabilités:
        Mise en place des contrôleurs (product.controller.js, user.controller.js).
        Définition des routes principales (product.routes.js, user.routes.js).
        Gestion des opérations CRUD pour les produits.
        Mise en œuvre des opérations liées aux utilisateurs.

Développeur 3:
    Responsabilités:
        Mise en place du middleware d'authentification (authMiddleware.js).
        Intégration du middleware pour protéger les routes nécessitant une authentification.
        Gestion des opérations liées à l'authentification des utilisateurs.
        Mise en place des tests unitaires pour les contrôleurs (tests/unit/).







---

# Final Project Specification – summary (max point 35 points)

The goal of our project is to create a simple e-commerce application (e-shop). The application will consist of two parts: frontend app and backend ( as a local web server using mySQL). App should includes authenticated and authorization module.
There are three roles in our application: guests, user (logged users) and admin (administrator).

Model data: category, name, price, account, rating.

The guest can only view the product list without being able to buy/order any products.
Logged user can buy/order any of products. User can possible to filter list of products by some of properties (like: range of price, product category). User has possible to find products by use name searching. Upon registration, the user provides his nick name and login details (e-mail as a login and password). Logged user can also see a list of orders existing in his basket.
Admin is responsible for manage list of products and list of user too. Admin can use a dedicated panel to delete, edit all existing product and add new product too.
The administrator can use a another panel dedicated only to him to manage the list of users – display users list and have possibility to banned (blocking) any of them. Banned means that user cannot buy/order new products.

Example of Mock of menu for different roles:

(item in " " means that it is name of user )

View for guest :
Home | Registry | Login

View for User :
Home | Product LIST | MyCARD | "NickName" | Logout

View for Admin
Home | ManageProduct | Admin View (for manage user) | "admin" | Logout

Extension for interested students ( options - extra 5 points ) – implementation ranking for products. Each of login user has a possible to rate a product by selecting some of the ranking stars ( for example)

# Grading details:

9 points for backend (web server) :
2 for properly defined routing
2 per model
4 for controllers
1 for the whole

13 points for frontend :
2 – for routing
1 – for search bar
4 - for CRUD operation
2 – for the basket
4 - for the whole

13 points for authentication and authorization :
1point - Registry
1point - Login
2 points User and roles model
2 points Guards for access to views
3 points Display view details depend on context
4 points autorization in backend - checking token and roles







