const Project = require('../schemas/project');

class ProjectService{

    async createProject(title, description){
        try{
            const newProject = new Project({
                title: title,
                description: description,
            });
            const newSavedProject = await newProject.save();
            return {project: {_id: newSavedProject._id, title: newSavedProject.title, description: newSavedProject.description}}
        }catch(error){
            return error;
        }
    }

    async getProjectById(projectId){
        try{
            const project = await Project.findById(projectId);
            return project;
        }catch(error){
            return error;
        }
    }

    async getProjectByUser(userId){
        try{
            const project = await Project.find({assignedTo: userId});
            return project;
        }catch(error){
            return error;
        }
    }

    async updateProject(projectId, updateData){
        try{
            const project = await Project.findByIdAndUpdate(projectId, updateData, {new: true});
            return project;
        }catch(error){
            return error;
        }
    }

    async deleteProject(projectId){
        try{
            await Project.findByIdAndDelete(projectId);
        }catch(error){
            return error;
        }
    }
};

module.exports = new ProjectService();