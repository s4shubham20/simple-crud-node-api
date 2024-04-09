const mongoose = require('mongoose');

const {
    Schema
} = mongoose;
const ProductSchema = Schema({
    name: {
        type: String,
        unique: [true, "Product name should be unique!"],
        required: [true, "Please enter product name here!"],
    },

    quantity: {
        type: Number,
        required: true,
        default: 0,
    },

    price: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        required: false,
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "User ID required!"]
    }

}, {
    timestamps: true
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;