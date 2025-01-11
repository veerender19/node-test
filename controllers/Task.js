module.exports = {
    taskData:()=>{
        try {
            const task = [
                {
                    taskId:1,
                    duration: 3, // second
                    dependency:[]
                },
                {
                    taskId:2,
                    duration: 5, // second
                    dependency:[1]
                },
                {
                    taskId:3,
                    duration: 2, // second
                    dependency:[]
                },
                {
                    taskId:4,
                    duration: 4, // second
                    dependency:[2,3]
                }
            ];
            return task;
        } catch (error) {
            console.log(error.message);
        }
    }    
}