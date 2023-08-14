const User = require("../database/models/userModel");
const catchAsyncError = require("../middlewares/catchAsyncErrors");


//get all users
exports.getAllUsers =catchAsyncError (async (req,res,next)=>{
    const users = await User.find();
    const userCount = await User.countDocuments();


    res.status(200).json({
        success:true,
        count:userCount,
        users
    })
});

//add a new user 
exports.addUser = catchAsyncError(async(req,res,next)=>{
    const {username} = req.body;

    const uid = User.getUid();

    const user = await User.create({
        username,uid
    });

    res.status(200).json({
        success:true,
        user
    });
});