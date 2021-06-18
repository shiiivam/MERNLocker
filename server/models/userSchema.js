// JWT for generating auth token
const jwt = require('jsonwebtoken');
// Mongoose to connect with MDB
const mongoose = require('mongoose');
// bcryptjs to hash the password
const bcrypt = require('bcryptjs');
// Key to hash tokens
const SECRET_KEY = process.env.SECRET_KEY; 

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
     ]
})

// Hashing the password
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});

// Generating Token
userSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }

}

const USER = mongoose.model('USER',userSchema);

module.exports = USER;
