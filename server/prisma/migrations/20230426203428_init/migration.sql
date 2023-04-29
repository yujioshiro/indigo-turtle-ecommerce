-- CreateTable
CREATE TABLE "Order_Items" (
    "oi_id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "prod_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_Items_pk" PRIMARY KEY ("oi_id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "user_id" INTEGER,
    "total" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order_id" SERIAL NOT NULL,

    CONSTRAINT "Orders_pk" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "Products" (
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "user_id" INTEGER,
    "image" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prod_id" SERIAL NOT NULL,

    CONSTRAINT "Products_pk" PRIMARY KEY ("prod_id")
);

-- CreateTable
CREATE TABLE "Users" (
    "username" VARCHAR(60) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" SERIAL NOT NULL,

    CONSTRAINT "Users_pk" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_pk3" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_pk2" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Order_Items" ADD CONSTRAINT "Order_Items_Orders_order_id_fk" FOREIGN KEY ("order_id") REFERENCES "Orders"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Order_Items" ADD CONSTRAINT "Order_Items_Products_prod_id_fk" FOREIGN KEY ("prod_id") REFERENCES "Products"("prod_id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_Users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_Users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
