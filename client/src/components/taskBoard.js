import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/api';
import TaskColumn from './taskColumn';
import TaskForm from './taskForm';
import SearchBar from './searchBar';
import '../styles/taskBoard.css';

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');

  const loadTasks = async () => {
    const res = await fetchTasks(search);
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, [search]);

  const handleCreate = async (taskData) => {
    await createTask(taskData);
    loadTasks();
  };

  const handleUpdate = async (id, updatedData) => {
    await updateTask(id, updatedData);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const todo = tasks.filter(t => t.status === 'todo');
  const inProgress = tasks.filter(t => t.status === 'in-progress');
  const done = tasks.filter(t => t.status === 'done');

  return (
    <div className="task-board">
      <div className="board-header">
        <h1>Project Task Tracker</h1>
        <SearchBar setSearch={setSearch} />
        <TaskForm onCreate={handleCreate} />
      </div>

      <div className="board-container">
        <TaskColumn
          title="To Do"
          tasks={todo}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        <TaskColumn
          title="In Progress"
          tasks={inProgress}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          tasks={done}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default TaskBoard;