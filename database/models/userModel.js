const mongoose = require("mongoose");

let lastUID ;

const userSchema = mongoose.Schema({
    uid:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
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
    lastUID = uid; //also about statics and methods
}

userSchema.pre('save',function(next){
    if(this.isNew){
        this.uid = ++lastUID;
    }
    next();
});

const User = mongoose.model("User",userSchema);

module.exports = User;