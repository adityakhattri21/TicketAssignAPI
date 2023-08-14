const mongoose = require("mongoose");

let lastUID ;

const userSchema = mongoose.Schema({
    uid:{
        type:Number,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:[true,"Please Enter the name"]
    },
    tickets:[{
        id:{
            type:mongoose.Schema.ObjectId,
            ref:"Tickets"
        }
    }]
});

userSchema.statics.setLastUID = (uid)=>{  // learn about statics and also about diff b/w arrow and normal function.
    lastUID = uid;
        //also about statics and methods
}

userSchema.statics.getUid = function () {
    return ++lastUID;
}

userSchema.pre("save",function(next){
    if(this.isNew)
    console.log("New entry in the db")
next();
})

const User = mongoose.model("User",userSchema);

module.exports = User;