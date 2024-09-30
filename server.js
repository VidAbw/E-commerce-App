const express = require("express");
const colors = require('colors')
//rest object
const app = express()

//rest api
app.get('/', (req,res) =>{
    res.send({
        message:"Welcome to ecommerce app"
    })
})

//PORT
const PORT = 8080

// run listen
app.listen(PORT,() =>{
    console.log(`Server Running on ${PORT}`.bgCyan.white);
});