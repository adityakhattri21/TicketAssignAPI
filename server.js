const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({path:"config/config.env"});
require("./database/conn");

const port = 4000 || process.env.PORT;

process.on("unhandledRejection" , ()=>{
    console.log("Server Crashed due to unhandled promise rejection");
})

const server = app.listen(port,()=>{  // find why we are using const server here.
    console.log(`Server is running at port : ${port}`);
})