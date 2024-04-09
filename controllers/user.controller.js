const User = require('../models/user.model.js');

const index = async (req, res) => {
    try{
        const users = await User.find({});
        if(!users){
            return userNotFound(res)
        }
        res.status(200).json(users);
    }catch(error) {
        res.status(500).json({
            message:error.message,
        });
    }
}

const create = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({
            message:error.message,
            error:error
        });
    }
}

const show = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        if(!user){
            return userNotFound(res);
        }
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

const update = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return userNotFound(res)
        }

        const updatedUser = await User.findById(id);
        res.status(200).json({
            message:"Updatead user details here!",
            user:updatedUser
        })
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

const destroy = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return userNotFound(res)
        }

        res.status(200).json({
            message:"User has been successfully deleted!",
        })
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

let userNotFound = async (response) => {
    return(
        response.status(404).json({
            message:"User not found!"
        })
    )
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy
}