const express = require('express')
const { userLogin,userSignup} = require('../controller/user.controller')
const {getProducts, getProductById} = require('../controller/product.controller')
// const paymentGateway = require('../controller/paymentGateway.controller')
const StripePayment = require('../controller/stripe.controller')

const router = express.Router()

router.post('/signup', userSignup)
router.post('/login',userLogin)
router.get('/products',getProducts);
router.get('/product/:id',getProductById)
// router.post('/payment',paymentGateway)
router.post('/api/create-checkout-session',StripePayment)

module.exports = router