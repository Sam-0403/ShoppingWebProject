const mongoose = require("mongoose");

const Product_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    customerId: {
        type: [String],
        default: []
    },
    customerQuantity: {
        type: [Number],
        default: []
    }
});

const Product = mongoose.model("product", Product_Schema);
module.exports = Product;