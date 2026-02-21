//Define routes for task-related API endpoints
//All routes are connected to functions in taskController
//The routes are defined in the following order:
// - GET / (Retrieve all tasks)
// - POST / (Create a new task)
// - PUT /:id (Update an existing task)
// - DELETE /:id (Delete an existing task)

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');

// Retrieve all tasks
router.get('/', taskController.getAllTasks);

// Create a new task
router.post('/', taskController.createTask);

// Update an existing task
router.put('/:id', taskController.updateTask);

// Delete an existing task
router.delete('/:id', taskController.deleteTask);

module.exports = router;