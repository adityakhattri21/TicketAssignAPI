const mongoose = require("mongoose");
const User = require("./models/userModel");

mongoose.connect("mongodb://126.0.0.1:27017/ticketSystem",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Database connected with server");
})

const db = mongoose.connection;

mongoose.connection.once('open',()=>{
    User.findOne({},{}).sort({uid:-1})
    .then((lastUser)=>{
        User.setLastUID(lastUser?lastUser.uid:0);
    })
    .catch(error=>{
        console.log(`Error fetching last UID : ${error}`)
    })
})

 