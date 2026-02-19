import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/tasks'
});

export const fetchTasks = (search = '') => {
  return api.get(`/?search=${search}`);
};

export const createTask = (taskData) => {
  return api.post('/', taskData);
};

export const updateTask = (id, taskData) => {
  return api.put(`/${id}`, taskData);
};

export const deleteTask = (id) => {
  return api.delete(`/${id}`);
};