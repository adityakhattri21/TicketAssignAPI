const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

let lastUID ;

const userSchema = new mongoose.Schema({
    uid:{
        type:Number,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:[true,"Please Enter the name"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please Enter your Password"],
        minLength:[6,"Password cannot be less than 6 characters."],
        select:false,  
    },

    tickets:[{
        id:{
            type:mongoose.Schema.ObjectId,
            ref:"Tickets"
        }
    }]
});

userSchema.statics.setLastUID = (uid)=>{  
    lastUID = uid;

}

userSchema.statics.getUid = function () {
    return ++lastUID;
}

userSchema.pre("save" , async function(next){ 

    if(!this.isModified("password")){ //isModified returns true if the field is modified. 
        next();
    }

    this.password = await bcrypt.hash(this.password,10);
});

//Compare Password
userSchema.methods.comparePassword = async function(enteredPassword){

    return await bcrypt.compare(enteredPassword,this.password);

};

//JWT TOKEN
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    })
};



const User = mongoose.model("User",userSchema);

module.exports = User;
