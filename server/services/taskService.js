const Task = require("../schemas/task");

class TaskService{

    async getTaskById(taskId){
        try{
            const task = await Task.findById(taskId);
            return task;
        }catch(error){
            return error;
        }
    }

    async getTaskByUser(userId){
        try{
            const task = await Task.find({assignedTo: userId});
            return task;
        }catch(error){
            return error;
        }
    }

    async getTaskByProject(projectId){
        try{
            const task = await Task.find({assignedTo: projectId});
            return task;
        }catch(error){
            return error;
        }
    }
    
    //create task
    async createTask({title, description, dueDate}){
        try{
            
            const newTask = new Task({
                title: title,
                description: description,
                dueDate: dueDate,
            });
            const newSavedTask = await newTask.save();
            return {task: {_id:newSavedTask._id, title: newSavedTask.title, description: newSavedTask.description, dueDate: newSavedTask.dueDate}}
        }catch(error){
            return error;
        }
    }
    //update task
    async updateTask(taskId, updateData){
       try{
        const task = await Task.findByIdAndUpdate(taskId, updateData, {new: true});
        return task;
       }catch(error){
        return error;
       }
    }
    //delete task
    async deleteTask(taskId){
        try{
            await Task.findByIdAndDelete(taskId);
        }catch(error){
            return error;
        }
    }
    
};
module.exports = new TaskService();