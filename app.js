const express = require('express');

const app = express();

const userRoutes = require("./routes/userRoute");
const ticketRoute = require("./routes/ticketRoute");
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());


app.use("/api/v1",userRoutes);
app.use("/api/v1",ticketRoute);

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Working"
    })
})

app.use(errorMiddleware);

module.exports = app;