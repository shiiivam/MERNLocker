const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Importing the model
const User = require('../models/userSchema');


router.get('/',(req,res)=>{
    res.send('Hello world');
})

// Promisises version

// router.post('/register',(req,res)=>{
//     const {name, email, phone, work, password, cpassword} = req.body;

//     // Validating request
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         res.status(422).json({error:"Please fill all the details"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"User already registered"});
//         }
        
//         const user = new User({name, email, phone, work, password, cpassword});
       
//         user.save()
//         .then(()=>{
//             res.status(201).json({message:"User registered successfully"})
//         })
//         .catch((err)=>{
//             res.status(500).json({error:err});
//         })
//     })
//     .catch((err)=>{
//         res.status(400).json({error:"Unable to register user"});
//     })
// })

// Async - Await version

router.post('/register', async (req,res)=>{
    const {name, email, phone, work, password, cpassword} = req.body;

    // Validating request
    if(!name || !email || !phone || !work || !password || !cpassword){
        res.status(422).json({error:"Please fill all the details"});
    }
    try{
        const userExist = await User.findOne({email:email})
        
        if(userExist){
            return res.status(422).json({error:"User already registered"});
        }else if(password != cpassword){
            return res.status(422).json({error:"Passwords doesn't match"});
        }else{
            const user = new User({name, email, phone, work, password, cpassword});
            
            const registeredUser = await user.save();    

            res.status(201).json({message:`User registered successfully ${registeredUser}`});
        }
    }catch(err){
        res.status(500).json({error:`Can't register : ${err}`})
    }   
           
})

router.post('/signin',async (req,res)=>{
    
    try{
        const {email, password} = req.body;

        // Validating request
        if(!email || !password){
            return res.status(400).json({error:"Please fill all the details"});
        }
        
        const userLogin = await User.findOne({email:email})        

        if(userLogin){
            // Comparing password
            const isMatched = await bcrypt.compare(password, userLogin.password);
            // To generate JWT on signing in
            // const token = await userLogin.generateAuthToken();
            // console.log(token);
           
            if(isMatched){
                // To generate JWT on signing in
                const token = await userLogin.generateAuthToken();
                console.log(token);
                // Storing tokie n cookie
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                     httpOnly: true
                });
                return res.status(201).json({message:"user logged in successfully"});
            }else{
                return res.status(400).json({error:"Invalid Credentials"});
            }
        }else{
            return res.status(400).json({error:"Invalid Credentials"});
        }
    }catch(err){
        res.status(500).json({error:err})
    }   
})


module.exports = router;