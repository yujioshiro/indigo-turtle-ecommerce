---
sidebar_position: 2
---

# Frontend

Frontend goals

### Tasks That Need To Be Done

* navbar
    * contains links to `home page`, `create post page`, `about page`, `login and signup page`
    * button to `logout`
* stores user data and cart data in cookies
* Pages
    * Authentication Page
        * Contains navbar
        * Login and sign up
    * Home Page (Landing Page)
        * Contains navbar
        * Contains a list of products
            * Each listing of a product in the home page should minimally contain:
                * Name of product
                * Price of product
                * Image, loaded from `img_url` (located in the products table)
            * Products with a quantity of less than 5 should display a low stock notification
    * Create product page
        * Contains navbar
        * Allows users to add new products with these details:
            * `productName`
            * `description`
            * `price`
            * `quantity`
            * `name` (user's name)
    * Product Page
        * Contains navbar
        * Displays product information in detail:
            * `productName`
            * `description`
            * `price`
            * `quantity`
            * `name` (user's name)
        * Gives user an option to select quantity and add to cart
            * If desired quality is greater than available quantity, users should receive some sort of notification/alert
        * Each product should have their own url denoted by their product id
    * Checkout Page
        * Allows users to edit, confirm, and submit their order request
            * Upon submission, server will return `order_id` (invoice number)
            * Option to delete or change quantity of an item
    * About Page
        * Contains navbar
        * A paragraph about Indigo Turtle/Hack Weekly
        * A link to our GitHub

### Tasks In Progress

### Completed Tasks