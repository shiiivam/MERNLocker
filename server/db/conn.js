const mongoose = require('mongoose');
const DB = process.env.DATABASE;

// Connecting to DATABASE
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false})
    .then(()=>{
        console.log("Successfully connected to Database");
    })
    .catch(()=>{"Can't connect to database"});