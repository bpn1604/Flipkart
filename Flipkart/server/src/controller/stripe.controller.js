const dotenv = require('dotenv')
dotenv.config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const StripePayment = async(req,res) => {
    try {
        // console.log("STRIPE",req.body.price)
        const product  = req.body;
        console.log(product)
       
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: product.map((item) => {
                return {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name:item.title.shortTitle,
                           images:[item.detailUrl]
                        },
                        unit_amount: (item.price.cost)*100
                    },
                    quantity: item.quantity
                }
            }),
            mode: 'payment',
            success_url: 'http://localhost:3000',
            cancel_url: 'http://localhost:3000',
        })

        res.json({
           id: session.id
        })
      
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        
    }
}

module.exports = StripePayment