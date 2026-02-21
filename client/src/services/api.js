/**
 * This file contains functions for interacting with the task API.
 * The API is created using Axios, which is a popular HTTP client library.
 * The base URL for the API is set to 'http://localhost:5000/api/tasks'.
 * The functions in this file are used to fetch tasks, create tasks, update tasks, and delete tasks.
 * They return promises that can be used to handle the response from the API.
 */

import axios from 'axios';

// Create an instance of Axios with the base URL for the API
const api = axios.create({
  baseURL: 'http://localhost:5000/api/tasks'
});

/**
 * Fetches all tasks from the API with an optional search query.
 * The search query is used to filter tasks by title.
 * Returns a promise that resolves to the response from the API.
 */
export const fetchTasks = (search = '') => {
  return api.get(`/?search=${search}`);
};

/**
 * Creates a new task by sending a POST request to the API.
 * The task data is sent in the request body.
 * Returns a promise that resolves to the response from the API.
 */
export const createTask = (taskData) => {
  return api.post('/', taskData);
};

/**
 * Updates an existing task by sending a PUT request to the API.
 * The task data is sent in the request body.
 * The task ID is used to identify the task to be updated.
 * Returns a promise that resolves to the response from the API.
 */
export const updateTask = (id, taskData) => {
  return api.put(`/${id}`, taskData);
};

/**
 * Deletes an existing task by sending a DELETE request to the API.
 * The task ID is used to identify the task to be deleted.
 * Returns a promise that resolves to the response from the API.
 */
export const deleteTask = (id) => {
  return api.delete(`/${id}`);
};