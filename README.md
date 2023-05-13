# incredible-birth-7157

### home page
![image](https://github.com/hrithikvishwakarma001/incredible-birth-7157/assets/104666876/239de8ab-8642-4058-a53e-31bf43f08624)

### products page
![image](https://github.com/hrithikvishwakarma001/incredible-birth-7157/assets/104666876/a44a4379-4491-4ec5-9390-42186a636cf7)

### cart page
![image](https://github.com/hrithikvishwakarma001/incredible-birth-7157/assets/104666876/400f34e7-c702-4e3e-bfbc-a3c184d4cf93)

### admin (user search functionality)
![image](https://github.com/hrithikvishwakarma001/incredible-birth-7157/assets/104666876/48847794-521f-48a0-9cb2-f1bf29870a9a)

### admin (all products crud)
![image](https://github.com/hrithikvishwakarma001/incredible-birth-7157/assets/104666876/ac5bfac8-442b-47cb-9ff7-e94c87212023)

### admin (all orders)
![image](https://github.com/hrithikvishwakarma001/incredible-birth-7157/assets/104666876/5d652cc3-c9a4-431d-97f0-ee1a65dc2831)



> ### cammands

-   `npm install` to install all dependencies
-   `npm run server` to start the server
-   `npm run dev` to start the app in development mode

> Endpoints for backend

### users

-   `GET /api/users` to get all users
-   `GET /api/users/:id` to get a user by id
-   `POST /api/users/register` to create a new user
-   `POST /api/users/login` to login a user and get token
-   `PATCH /api/users/update/:id` to update a user by id
-   `DELETE /api/users/delete/:id` to delete a user by id

### products

-   `GET /api/products/all` to get all products
-   `GET /api/products/men` to get all mens products
-   `GET /api/products/women` to get all womens products
-   `GET /api/products/all/:id` to get a product by id
-   `POST /api/products/all/create` to create a new product
-   `PATCH /api/products/all/update/:id` to update a product by id
-   `DELETE /api/products/all/delete/:id` to delete a product by id

### orders

-   `GET /api/orders` only admin can access this route
-   `POST /api/orders/create` to create a new order `Authentication required`

### cart

-   `Authentication required` for all cart routes
-   `GET /api/cart` to get all cart items of user
-   `GET /api/cart/admin` to get all cart items of all user
-   `GET /api/cart/:id` to get a cart item by id
-   `POST /api/cart/create` to create a new cart item
-   `PATCH /api/cart/update/:id` to update a cart item by id
-   `DELETE /api/cart/delete/:id` to delete a cart item by id


### git commands

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

