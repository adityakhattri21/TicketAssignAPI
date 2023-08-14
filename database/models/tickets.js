const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
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
    }
});

const Ticket = mongoose.model('Ticket',ticketSchema);

module.exports = Ticket;