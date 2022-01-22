const express = require("express");
const product_router = express.Router();

const {get_products, get_product_by_id, set_product_customer} = require("../controller/product_controller");

//@desc     GET all products from DB
//@route    GET /api/products
//@access   Public
product_router.get("/", get_products);

//@desc     GET a product by id from DB
//@route    GET /api/products/:id
//@access   Public
product_router.get("/:id", get_product_by_id);

//@desc     POST a product cart by id to DB
//@route    GET /api/products/customer
//@access   Public
product_router.post("/customer", set_product_customer);

module.exports = product_router;