const app = require("./app");
require("./database/conn");

const port = 4000 || process.env.PORT;

const server = app.listen(port,()=>{  // find why we are using const server here.
    console.log(`Server is running at port : ${port}`);
})