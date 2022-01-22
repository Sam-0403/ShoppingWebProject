const Product = require("../models/Product");

const get_products = async (req, res) => {
    try{
        const products = await Product.find({});
        // console.log("Products Page Success!!!");
        res.json(products);
    }
    catch(error){
        console.log("Products Page Failed!!!");
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const get_product_by_id = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        // console.log(`Product ${req.params.id} Page Success!!!`);
        res.json(product);
    }
    catch(error){
        console.log(`Product ${req.params.id} Page Failed!!!`);
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const set_product_customer = async (req, res) => {
    try{
        // console.log(req.body._id);
        // console.log(req.body.customerId);
        // console.log(req.body.customerQuantity);
        await Product.findByIdAndUpdate(req.body._id,{
            "$set": {
                customerId: req.body.customerId,
                customerQuantity: req.body.customerQuantity
            }
        });
        // console.log(`Update Customer Success!!!`);
    }
    catch(error){
        console.error(`Update Customer Fail!!!`);
        console.error(error);
        process.exit(1);
    }
}

module.exports = {
    get_products,
    get_product_by_id,
    set_product_customer
}