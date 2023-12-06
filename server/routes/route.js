const {Router} = require('express');
const User = require('../schemas/user.js');
const Task = require('../schemas/task.js');
const Project = require('../schemas/project.js');
const UserController = require("../controllers/user.js");
const TaskController = require('../controllers/task.js');
const ProjectController = require('../controllers/project.js');
const connectDB = require('../database/mongoose.js');
const routes = Router();
routes.get('/',(req, res)=>{
    return res.json({
        message:'hello, im alive',
        code: 200,
    })
});
routes.get('/users', async(req, res)=>{
    await connectDB();
    const newUser = new User({
        username: 'JohnDoe',
        email: "john.doe@email.com",
        password: '123456',
    });
    newUser.save()
        .then((savedUser)=>{
            console.log('User Saved! ', savedUser);
        })
        .catch((error) => {
            console.log("Error Occurred: ", error);
        })    
});
routes.get("/tasks", async(req, res) => {
    await connectDB();
    const newTask = new Task({
        title: "New Task",
        description: "Do something!",
        status: "in progress",
    });
    newTask.save()
        .then((savedTask) => {
            console.log("Task Saved! ", savedTask);
        })
        .then((error) => {
            console.log("Error Occurred!", error);
        })
});
routes.get("/projects", async(req, res) => {
    await connectDB();
    const newProject = new Project({
        title: "John Doe's Project",
        description: "Forex Web Application Project",
    });
    newProject.save()
        .then((savedProject) => {
            console.log("Saved Project!", savedProject);
        })
        .then((error) => {
            console.log("Error Occurred!", error);
        })
});
routes.post("/createUser", UserController.signUp);
routes.post("/createTask", TaskController.createTask);
routes.post("/updateTask", TaskController.updateTask);
routes.delete("/deleteTask", TaskController.deleteTask);
routes.post("/createProject", ProjectController.createProject);
routes.post("/updateProject", ProjectController.updateProject);
routes.delete("/deleteProject", ProjectController.deleteProject);
routes.post("/logIn", UserController.logIn);
routes.get("/getUserById/:userId", UserController.getById);
routes.get("/getUserByEmail/:email", UserController.getByEmail);

module.exports = routes;