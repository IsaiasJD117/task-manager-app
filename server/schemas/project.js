const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',     
    }]
}); 
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;