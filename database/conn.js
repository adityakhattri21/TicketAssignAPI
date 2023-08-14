const mongoose = require("mongoose");
const User = require("./models/userModel");

mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
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

 