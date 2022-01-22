const express = require("express");
const user_router = express.Router();

const {get_users, post_users, confirm_and_get_user, confirm_users, set_user_cart} = require("../controller/user_controller");

//@desc     GET all users from DB
//@route    GET /api/users/login
//@access   Public
user_router.get("/", get_users);

//@desc     POST user to DB
//@route    GET /api/users/signup
//@access   Public
user_router.post("/signup", post_users);

//@desc     Confirm and get user from DB
//@route    GET /api/users/confirm/:confirmationCode
//@access   Public
user_router.post("/confirm/:confirmationCode", confirm_and_get_user);

//@desc     Confirm and get user from DB
//@route    GET /api/users/confirm
//@access   Public
user_router.post("/confirm", confirm_users);

//@desc     Post user cart to DB
//@route    GET /api/users/cart
//@access   Public
user_router.post("/cart", set_user_cart);

module.exports = user_router;