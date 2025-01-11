const express = require("express");
const taskScheduler = require("./controllers/TaskScheduler");
const app = express();
taskScheduler.schedule();
app.listen(3000, ()=>{
    console.log(`server is running on port:`, 3000);
})