# incredible-birth-7157

> ### frontend

-   gaurav
    -   home page (navbar, footer, banner, products, categories, etc.)
    -   product details page
    -   wishlist page (add to wishlist, remove from wishlist)
-   arpit
    -   login page
    -   signup page
    -   cart page (add to cart, remove from cart, update cart)
-   ketan
    -   redux setup (store, actions, reducers) (ask for help if needed from hrithik)
    -   product page (pagination, filter, sort)
    -   checkout page

> ### backend

-   hrithik
    -   backend setup (server, routes, controllers, models)
    -   database (mongodb)
    -   admin page (frontend)
    -   crud operations (products,users, orders)
-   faizan
    -   backend (server, routes, controllers, models)

> ### cammands

-   `npm install` to install all dependencies
-   `npm run server` to start the server
-   `npm run dev` to start the app in development mode

> ### git commands

-   `git clone <url>` to clone the repo
-   `git branch <branch-name>` to create a new branch
-   `git checkout <branch-name>` to switch to a branch
-   `git checkout -b <branch-name>` to create a new branch and switch to it
-   `git add .` to add all files
-   `git commit -m "<message>"` to commit changes
-   `git push origin <branch-name>` to push changes to github
-   `git pull origin <branch-name>` to pull changes from github
-   `git branch` to list all branches
-   `git branch -d <branch-name>` to delete a branch
-   `git merge <branch-name>` to merge a branch to current branch
-   `git status` to check the status of the repo

> Endpoints for backend

### users
-  `GET /api/users` to get all users
-  `GET /api/users/:id` to get a user by id
-  `POST /api/users/register` to create a new user
-  `POST /api/users/login` to login a user and get token
-  `PATCH /api/users/update/:id` to update a user by id
-  `DELETE /api/users/delete/:id` to delete a user by id

### products
-  `GET /api/products/all` to get all products
-  `GET /api/products/men` to get all mens products
-  `GET /api/products/women` to get all womens products
-  `GET /api/products/all/:id` to get a product by id
-  `POST /api/products/all/create` to create a new product
-  `PATCH /api/products/all/update/:id` to update a product by id
-  `DELETE /api/products/all/delete/:id` to delete a product by id
