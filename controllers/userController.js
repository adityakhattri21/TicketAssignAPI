const User = require("../database/models/userModel");

exports.getAllUsers = async (req,res,next)=>{
    const users = await User.find();
    const userCount = await User.countDocuments();
    
    res.status(200).json({
        success:true,
        count:userCount,
        users
    })
}