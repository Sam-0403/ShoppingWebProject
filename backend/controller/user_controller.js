require("dotenv").config();
const nodemailer = require("nodemailer");
const User = require("../models/User");
const user = process.env.EMAIL;
const password = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: user,
        pass: password
    }
});

const send_confirmation_email = (name, email, confirmationCode) => {
    try{
        // console.log(user);
        // console.log(password);
        // console.log(confirmationCode);
        transporter.sendMail({
            from: user,
            to: email,
            subject: "Please confirm your account",
            html: 
                `<div>
                <h1>Email Confirmation</h1>
                <h2>Hello ${name}</h2>
                <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                <a href=http://localhost:3000/confirm/${confirmationCode}> Click here</a>
                </div>`
        });
        // console.log("Send Email Success!!!");
    }
    catch(error){
        console.log("Send Email Fail!!!");
        console.error(error);
    }
}

const get_users = async (req, res) => {
    try{
        const users = await User.find({});
        // console.log("Login Page Success!!!");
        res.json(users);
    }
    catch(error){
        console.log("Login Page Failed!!!");
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};

const confirm_and_get_user = async (req, res) => {
    try{
        // console.log(req.params.confirmationCode);
        await User.updateOne({confirmationCode: req.params.confirmationCode}, {status: "Active"}, (error, res) => {
            console.error(error);
        });
        // console.log("Confirm Page Success!!!");
    }
    catch(error){
        console.log("Confirm Page Failed!!!");
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};

const post_users = async (req, res) => {
    try{
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';
        for (let i = 0; i < 25; i++) {
            token += characters[Math.floor(Math.random() * characters.length )];
        }
        let userInfo = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin,
            confirmationCode: token,
            cartProduct: [],
            cartPrice: [],
            cartQuantity: []
        };
        await User.insertMany(userInfo);
        // console.log(`Post ${userInfo.name} Success!!!`);
        send_confirmation_email(req.body.name, req.body.email, token);
    }
    catch(error){
        console.error(`Post Fail!!!`);
        console.error(error);
        process.exit(1);
    }
}

const confirm_users = async (req, res) => {
    try{
        send_confirmation_email(req.body.name, req.body.email, req.body.confirmationCode);
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
}

const set_user_cart = async (req, res) => {
    try{
        // console.log(req.body.cartProduct);
        // console.log(req.body._id);
        // console.log(req.body.cartPrice);
        // console.log(req.body.cartQuantity);
        await User.findByIdAndUpdate(req.body._id,{
            "$set": {
                cartProduct: req.body.cartProduct,
                cartPrice: req.body.cartPrice,
                cartQuantity: req.body.cartQuantity}
        });
        // console.log(`Update Cart Success!!!`);
    }
    catch(error){
        console.error(`Update Cart Fail!!!`);
        console.error(error);
        process.exit(1);
    }
}

module.exports = {get_users, post_users, confirm_and_get_user, confirm_users, set_user_cart};