require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connection Success!!");
    }
    catch(error){
        console.error("MongoDB Connection Failed!!");
        process.exit(1);
    }
}
module.exports = connectDB;