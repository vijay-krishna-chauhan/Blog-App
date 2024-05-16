const mongoose=require("mongoose");
require("dotenv").config();

const dbconnect=()=>{
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("DB is connected successfully"))
    .catch((err)=>{
        console.log("Error in connection");
        console.log(err.message);
        process.exit(1);
    })
}

module.exports=dbconnect;