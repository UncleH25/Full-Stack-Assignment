// This function retrieves all tasks with an optional search query filtering by title
// It returns all tasks that match the search query, or all tasks if no search query is provided
const { Op } = require('sequelize');
const Task = require('../models/task');

exports.getAllTasks = async (req, res, next) => {
  try {
    // Get the search query from the request query
    const searchQuery = req.query.search;

    // Create a filter object to pass to the findAll method
    // If the search query is provided, the filter object should include it
    const filter = searchQuery ? { title: { [Op.like]: `%${searchQuery}%` } } : {};

    // Retrieve all tasks that match the filter
    const tasks = await Task.findAll({ where: filter });

    // Return the tasks in the response
    res.status(200).json(tasks);
  } catch (error) {
    // If an error occurs, pass it to the next middleware function
    next(error);
  }
};

// This function creates a new task
// It checks for the presence of a title and a due date in the future
// If either of these checks fail, it returns an error message
exports.createTask = async (req, res, next) => {
  try {
    // Get the task data from the request body
    const { title, description, status, dueDate } = req.body;

    // Check if the title is provided
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    // Check if the due date is provided and in the future
    if (!dueDate || new Date(dueDate).getTime() < Date.now()) {
      return res.status(400).json({ message: 'Due date must be in the future' });
    }

    // Create a new task
    const task = await Task.create({ title, description, status, dueDate });

    // Return the created task in the response
    res.status(201).json(task);
  } catch (error) {
    // If an error occurs, pass it to the next middleware function
    next(error);
  }
};

// This function updates an existing task
// It checks for the presence of a due date in the future
// If this check fails, it returns an error message
exports.updateTask = async (req, res, next) => {
  try {
    // Get the task ID from the request parameters
    const id = req.params.id;

    // Get the task data from the request body
    const { status, title, description, dueDate } = req.body;

    // Retrieve the task by its ID
    const task = await Task.findByPk(id);

    // If the task is not found, return an error message
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if the due date is provided and in the future
    if (dueDate && new Date(dueDate).getTime() < Date.now()) {
      return res.status(400).json({ message: 'Due date must be in the future' });
    }

    // Update the task
    await task.update({ status, title, description, dueDate });

    // Return the updated task in the response
    res.status(200).json(task);
  } catch (error) {
    // If an error occurs, pass it to the next middleware function
    next(error);
  }
};

// This function deletes an existing task
// It checks if the task is found before deleting it
// If the task is not found, it returns an error message
exports.deleteTask = async (req, res, next) => {
  try {
    // Get the task ID from the request parameters
    const id = req.params.id;

    // Retrieve the task by its ID
    const task = await Task.findByPk(id);

    // If the task is not found, return an error message
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Delete the task
    await task.destroy();

    // Return a success message in the response
    res.status(204).json({ message: 'Task deleted successfully' });
  } catch (error) {
    // If an error occurs, pass it to the next middleware function
    next(error);
  }
};