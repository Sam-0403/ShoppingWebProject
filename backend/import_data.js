require("dotenv").config();

const ProductData = require("./data/initial_product_data.json");
const UserData = require("./data/initial_user_data.json")
const connectDB = require("./config/database");
const Product = require("./models/Product");
const User = require("./models/User");

connectDB();

const import_data = async () => {
    try{
        await Product.deleteMany({});
        await Product.insertMany(ProductData);
        await User.deleteMany({});
        await User.insertMany(UserData);
        console.log("Product Data Import Success!!!");
        console.log("User Data Import Success!!!");
        process.exit();
    }
    catch(error){
        console.error("Product Data Import Failed!!!");
        console.error("User Data Import Failed!!!");
        process.exit(1);
    }
};

import_data();