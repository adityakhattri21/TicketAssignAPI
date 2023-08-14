const User = require("../database/models/userModel");
const Ticket = require("../database/models/tickets");
const TicketAssign = require("../utils/ticketAssign");
const catchAsyncError = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");


const queue = new TicketAssign();


exports.generateTicket =catchAsyncError( async (req,res,next)=>{

    const users = await User.find({},`uid name`);
    queue.initializeQueue(users);
    const {desc,raised} = req.body;
    if(!raised){
        return next(new ErrorHandler("Error hai bsdk",402));
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

exports.getAllTicket = async(req,res,next)=>{
    const tickets = await Ticket.find().populate("assigned","username uid").populate("raised","username uid");
    const count = await Ticket.countDocuments();

    res.status(200).json({
        success:true,
        count:count,
        tickets
    })
}