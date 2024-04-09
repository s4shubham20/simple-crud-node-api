const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'User name is required!'],
    },
    email: {
        type: String,
        required: [true, 'User email is required!'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
    profile_pic: {
        type: String,
        default: null,
    },
    status: {
        type: String,
        default: 0
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;