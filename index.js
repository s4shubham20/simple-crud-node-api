const express = require('express');
const mongoose = require('mongoose');
const productRouter = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api/product', productRouter);

mongoose.connect("mongodb+srv://shubhameglobal20:JzsWu2FC1v2qc0Q5@nodeapi.e6v5tml.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeApi").
then((success) => {
    console.log('connection successfully connected');
    app.listen(3000, () => {
        console.log('server is running on port 3000');
    });    
})    
.catch((error) => {
    console.log(error , 'connection lost');
});    



