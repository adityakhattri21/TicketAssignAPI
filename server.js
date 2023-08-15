const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({path:"config/config.env"});
require("./database/conn");

const port = 4000 || process.env.PORT;

process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the Server due to unHandled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    });
});

//handling uncaughtException
process.on("uncaughtException" , (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the Server due to unCaughtException `);
    process.exit(1);
})

const server = app.listen(port,()=>{  // find why we are using const server here.
    console.log(`Server is running at port : ${port}`);
})
