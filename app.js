const express = require('express');
const cookieParser = require("cookie-parser");

const app = express();

const userRoutes = require("./routes/userRoute");
const ticketRoute = require("./routes/ticketRoute");
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());
app.use(cookieParser());


app.use("/api/v1",userRoutes);
app.use("/api/v1",ticketRoute);

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"This is a test api which assigns tickets to authenticated users in Round Robin Fashion . Please read the readme here for more info : ``"
    })
})

app.use(errorMiddleware);

module.exports = app;