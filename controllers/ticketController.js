const User = require("../database/models/userModel");
const Ticket = require("../database/models/ticketModel");
const TicketAssign = require("../utils/ticketAssign");
const catchAsyncError = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");


const queue = new TicketAssign();


exports.generateTicket =catchAsyncError( async (req,res,next)=>{

    const users = await User.find({},`uid name`);
    queue.initializeQueue(users);
    const {desc} = req.body;
    raised = req.user._id;
    if(!raised){
        return next(new ErrorHandler("Raised Required",400));
    }
    const assigned = queue.currentUser();
    queue.rotate();
    const id = assigned._id;

    const user = await  User.findById(id);
    const newTicket= await Ticket.create({
        desc,raised,assigned
    });

    user.tickets.push(newTicket);

    await user.save();

    res.status(200).json({
        success:true,
        newTicket
    });  

});

exports.getAllTicket = catchAsyncError(async(req,res,next)=>{
    const tickets = await Ticket.find().sort({raisedAt:-1}).populate("assigned","username uid").populate("raised","username uid");
    const count = await Ticket.countDocuments();

    res.status(200).json({
        success:true,
        count:count,
        tickets
    })
})

exports.searchTicket = catchAsyncError(async(req,res,next)=>{
    const ticket = await Ticket.findById(req.params.id).populate("assigned","username uid").populate("raised","username uid");

    if(!ticket){
        return next(new ErrorHandler("No Ticket with this ID",404));
    }
    res.status(200).json({
        success:true,
        ticket
    })
})