const express=require('express');
const app=express();

require("dotenv").config();
const PORT= process.env.PORT || 4000;

app.use(express.json());
const blogRoutes= require("./routes/blog");

app.use("/api/v1", blogRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running at Port: ${PORT}`);

})
const dbconnect=require("./config/database");
dbconnect();

app.get("/", (req,res)=>{
    res.send(`<h1>Welcome to my blog app</h1>`)
})