const Product = require('../model/product.schema')

const getProducts = async (req, res) => {
    try {
        let products = await Product.find({});
        return res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            message: error.message 
        })
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        let product = await Product.findOne({'id':id});
        return res.status(200).json(product)

    } catch (error) {
        res.status(500).json({
            message: error.message 
        })
    }
}

module.exports = {getProducts, getProductById}