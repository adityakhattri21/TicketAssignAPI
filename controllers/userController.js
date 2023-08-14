const User = require("../database/models/userModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const sendToken = require("../utils/jwtToken");


//get all users
exports.getAllUsers =catchAsyncErrors(async (req,res,next)=>{
    const users = await User.find();
    const userCount = await User.countDocuments();


    res.status(200).json({
        success:true,
        count:userCount,
        users
    })
});

//add a new user 
exports.signUp = catchAsyncErrors(async(req,res,next)=>{
    const {username,password} = req.body;

    const uid = User.getUid();

    const user = await User.create({
        username,uid,password
    });

    sendToken(user,201,res);
});

exports.signIn = catchAsyncErrors(async(req,res,next)=>{
    const {username,password} = req.body;

    if(!username || !password){
        return next(new ErrorHandler("Please Enter Email & Password",400));
    }

    const user = await User.findOne({username:username}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid Email or Password",401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched)
    return next(new ErrorHandler("Invalid Email or Password",401));

    sendToken(user,200,res);
})

exports.logout = catchAsyncErrors(async(req,res,next)=>{
    res.cookie("token",null,{
        Expires:new Date(Date.now()),
        httpOnly:true
    });


    res.status(200).json({
        success:true,
        message:"Logged Out Successfully."
    });
}) 