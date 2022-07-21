// main file

const express = require("express");
const bodyParser = require('body-parser')
require('dotenv').config()
const app = expr

app.use(bodyParser.json()) // note: this is before the route

const api = require('./rotas/')
app.use('/api', api)
const PORT = process.env.PORT;
// console.log(process.env.MONGO_PASS)

app.get('/', (req, res)=>{
    res.json({
        success: true
    })
})

app.listen(PORT)
