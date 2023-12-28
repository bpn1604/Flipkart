const express = require('express')
const Connection = require('./database/db')
const dotenv = require('dotenv')
const data = require('./data')
const Router = require('./routes/route')
const cors = require('cors')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')

const app = express()
dotenv.config()
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',Router)

const PORT = 5000

Connection()

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

data()

const paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY

const paytmParams ={}
paytmParams['MID'] = process.env.PAYTM_MID
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID
paytmParams['ORDER_ID'] = uuidv4()
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID
paytmParams['TXN_AMOUNT'] = '500'
paytmParams['CALLBACK_URL'] = 'http://localhost:5000/callback'
paytmParams['EMAIL'] = 'xyz@gmail.com'
paytmParams['MOBILE_NO'] = '1234567890'

module.exports = {paytmParams}