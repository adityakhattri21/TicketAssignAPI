const jwt = require("jsonwebtoken");
const catchAsyncError = require("./catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../database/models/userModel");


exports.isAuthenticatedUser = catchAsyncError(async (req,res,next)=>{

    const {token} = req.cookies;
    
    if(token === 'j:null'){
        return next(new ErrorHandler("Please Login to continue",401));
    }
    
    const decodedData = jwt.verify(token,process.env.JWT_SECRET);
    
    req.user = await User.findById(decodedData.id);
    
    next();
    
    });