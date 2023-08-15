const mongoose = require("mongoose");
const moment = require('moment');

const ticketSchema = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    assigned:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    raised:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    raisedAt:{
        type:String,
        default:()=>moment().utcOffset("+05:30").format("DD-MM-YYYY HH:mm:ss")
    }
});

const Ticket = mongoose.model('Ticket',ticketSchema);

module.exports = Ticket;
