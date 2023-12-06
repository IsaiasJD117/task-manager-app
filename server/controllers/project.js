const Project = require('../schemas/project')
const ProjectService = require('../services/projectService');
class ProjectController{

    async createProject(req, res){
        try{
            const {title, description, userId, projectId} = req.body;
            if(!title || !description || !userId || !projectId){
                return req.status(400).json({error: "Bad Request!"});
            }
            const result = await ProjectService.createProject({
                title: title,
                description: description,
                userId: userId,
                projectId: projectId,
            });
            if(result.error){
                return res.status(400).json({error: result.error});
            }
            res.status(201).json(result.project)
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    async updateProject(req, res){
        try{
            const projectId = req.params.projectId;
            const updateData = req.body;
            
            const updatedProject = await ProjectService.updateProject(projectId, updateData);
            if(!updateData){
                return res.status(404).json({error: "Project not found!"})
            }
            res.status(200).json(updatedProject);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    async deleteProject(req, res){
        try{
            const projectId = req.params.projectId;

            await Project.findByIdAndDelete(projectId);
            res.status(200).json({message: "Project successfully deleted!"})
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }
}
module.exports = new ProjectController();