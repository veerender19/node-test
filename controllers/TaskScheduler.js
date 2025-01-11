const schedule = require('node-schedule');
const task = require("./Task");
const cron = require("node-cron");
module.exports = {
    schedule:async (data=null)=>{
        try {
            const taskResposse = task.taskData(); 
            for(let val of taskResposse){
                const second = val.duration;
                console.log(`task ${val.taskId} started`);
                cron.schedule(`*/${second} * * * * *`, function () {
                    console.log(`task ${val.taskId} completed`);
                });
            }      
        } catch (error) {
            console.log("error", error)
        }
    }
};