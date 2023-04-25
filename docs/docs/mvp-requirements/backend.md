---
sidebar_position: 1
---

# Backend

Backend tings

### Tasks That Need To Be Done
* Four postgres tables
    * Users (describes a user)
        * `name`, `email`, `password`, `address`, `created_at`, `updated_at`
            * Primary key: `user_id`
            * `name`, `email`, and `user_id` must be unique
    * Products (describes a product)
        * `productName`, `description`, `price`, `quantity`, `user_id`, `img_url`, `created_at`, `updated_at`
            * Primary key: `prod_id`
            * `productName` and `prod_id` must be unique
    * Orders (describes an order/invoice)
        * `user_id`, `total`, `created_at`, `updated_at`
            * Primary key: `order_id`
            * `order_id` must be unique
    * Order_Items (describes each item in an order)
        * `order_id`, `prod_id`, `quantity`, `total`, `created_at`, `updated_at`
            * Primary key: `oi_id`
            * `oi_id` must be unique
* When quantity of an item reaches 0, the product should be automatically deleted from the database
* ExpressJS handles request to login
    * `/login`
* ExpressJS handles request to register
    * `/register`
* ExpressJS handles request to create a product only for logged in users
    * `/product-create`
* Express handles request to get products
    * `/products/:startIndex:count`
* Express handles adding invoice
    * `/order-create`
    * should also handle decrementing the amount purchased from `Products.quantity` 

### Tasks In Progress

### Completed Tasks