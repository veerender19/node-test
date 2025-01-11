const { response } = require("express");
const task = require("./Task");
const cron = require("node-cron");
module.exports = {
    schedule:async (data=null)=>{
        try {
            const taskResponse = task.taskData(); 
            for(let val of taskResponse){
                const {taskId, duration} = val;
                console.log(`task ${taskId} started`);
                cron.schedule(`*/${duration} * * * * *`, function () {
                        console.log(`task ${taskId} completed`);
                });
            }      
        } catch (error) {
            console.log("error", error)
        }
    }
};