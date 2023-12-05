const Task = require('../schemas/task')
const TaskService = require('../services/taskService');
class TaskController{
    async createTask(req,res){
        try{
            const { title, description, dueDate, userId, projectId } = req.body;
            if( !title || !description || !dueDate || !userId || !projectId){
                return req.status(400).json({error: "Bad Request!"})
            }
            const result = await new TaskService.createTask({
                title: title,
                description: description,
                dueDate: dueDate,
                userId: userId,
                projectId: projectId,
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
    async getTask(req, res){
        try{
            const { taskId, userId, projectId } = req.body;
        if(!taskId || userId || projectId ){
            throw new Error("Bad Request!");
        }
        const task = await Task.find({ taskId: taskId, userId: userId, projectId: projectId });
        if(task.error){
            return res.status(400).json({error: task.error})
        }
        res.status(201).json(task);
        }catch(error){
            console.log(error);
        }
    }
};
module.exports = new TaskController();