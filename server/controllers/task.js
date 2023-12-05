const TaskService = require('../services/taskService');
class TaskController{
    async taskBoard(req,res){
        try{
            const { title, description, dueDate } = req.body;
            if( !title || !description || !dueDate){
                return req.status(400).json({error: "Bad Request!"})
            }
            const result = await new TaskService.createTask({
                title: title,
                description: description,
                dueDate: dueDate,
            });
            if(result.error){
                return res.status(400).json({error: result.error});
            }
            res.status(201).json(result.task)
        }catch(error){
            console.error(error);
            res.status(500).json(error);
        }
    }
};
module.exports = new TaskController();