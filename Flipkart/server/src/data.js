const productData = require('./constants/data')
const Product = require('../src/model/product.schema')

const Data = async() => {
    try {
       await Product.insertMany(productData)
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = Data