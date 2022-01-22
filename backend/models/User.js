const mongoose = require("mongoose");

const User_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Active"],
        default: "Pending"
    },
    confirmationCode: {
        type: String,
        unique: true
    },
    cartProduct: {
        type: [String],
        default: []
    },
    cartPrice: {
        type: [Number],
        default: []
    },
    cartQuantity: {
        type: [Number],
        default: []
    }
});

const User = mongoose.model("user", User_Schema);
module.exports = User;