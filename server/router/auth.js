const express = require('express');
const router = express.Router();

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
        }
        
        const user = new User({name, email, phone, work, password, cpassword});
            
        await user.save()    

        res.status(201).json({message:"User registered successfully"})
    }catch(err){
        res.status(500).json({message:"Can't register"})
    }   
           
})

router.post('/signin',async (req,res)=>{
    const {email, password} = req.body;

    // Validating request
    if(!email || !password){
       return res.status(422).json({error:"Please fill all the details"});
    }
    try{
        const {email, password} = req.body;

        // Validating request
        if(!email || !password){
            return res.status(400).json({error:"Please fill all the details"});
        }e33
        const userLogin = await User.findOne({email:email})
        if(!userLogin){
            return res.status(422).json({error:"Invalid crendentials"});
        }else{
            return res.status(201).json({message:"user logged in successfully"});
        }
    }catch(err){
        res.status(500).json({error:err})
    }   
})


module.exports = router;