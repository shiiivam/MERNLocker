const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const cookieParser = require("cookie-parser");
cookieParser();

const Authenticate = async (req, res, next) => {
    try{

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})

        if(!rootUser){throw new Error("User Not Found")}
        req.token = token;
        req.rootUser = rootUser;
        req.UserID = rootUser._id;
        next();

    }catch(err){
        res.status(401).send("Unauthorized access: token not found");
        console.log(err);
    }
}

module.exports = Authenticate;