const mongoose = require("mongoose");
const User = require("./models/userModel");

mongoose.connect("mongodb://127.0.0.1:27017/ticketSystem",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Database connected with server");
})

mongoose.connection.once('open',()=>{
    User.findOne({},{},{uid:-1})
    .then(lastUser=>{
        User.setLastUID(lastUser?lastUser.uid:1);
    })
    .catch(error=>{
        console.log(`Error fetching last UID : ${error}`)
    })
})