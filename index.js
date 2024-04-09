require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const productRouter = require("./routes/product.route.js");
const userRouter = require("./routes/user.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api/product', productRouter);
app.use('/api/user', userRouter);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@nodeapi.e6v5tml.mongodb.net/Node-API?retryWrites=true&w=majority&appName=${process.env.DB_NAME}`).
then((success) => {
    console.log('connection successfully connected');
    app.listen(process.env.PORT, () => {
        console.log('server is running on port',process.env.PORT);
    });    
})    
.catch((error) => {
    console.log(error , 'connection lost');
});    



