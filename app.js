const { error } = require('console');
const express = require('express');
const port = 3005;
const mongoose = require('mongoose')
const Product = require('./models/model')

const app = express();

app.use(express.json());

// app.listen(port,() => {
// try {
//     console.log("bien connecté sur le port 3005")
// } catch (error) {
//     console.log(error.message);
// }
// })

mongoose.connect("mongodb+srv://kaciham:12345@cluster0.csfphvs.mongodb.net/testapi?retryWrites=true&w=majority")
.then(()=>{
    console.log("connecté à la database")
    app.listen(port,() => {
        try {
            console.log("bien connecté sur le port 3005")
        } catch (error) {
            console.log(error.message);
        }
        })
}).catch(()=>{
    console.log(error)
})

app.get('/products',async (req,res) => {
    try {
     const products = await Product.find({})
     res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/product', async (req,res) => {
try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
} catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
}
})



//TEST COMMIT 2