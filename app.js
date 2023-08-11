const express = require('express');

const app = express();

const userRoutes = require("./routes/userRoute");

app.use("/api/v1",userRoutes);

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Working"
    })
})

module.exports = app;