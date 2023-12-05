const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
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
    status: {
        type: String,
        enum: ['todo', 'inProgress', 'completed'],
        default: 'todo',
    },
    dueDate: {
        type: Date,
        default: Date.now(),
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects'
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;