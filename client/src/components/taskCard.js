import React from 'react';
import '../styles/taskCard.css';

function TaskCard({ task, onUpdate, onDelete }) {
  const handleStatusChange = (e) => {
    onUpdate(task.id, { ...task, status: e.target.value });
  };

  return (
    <div className="task-card">
      <div className="task-title">{task.title}</div>
      <div className="task-description">{task.description}</div>
      <div className="task-due-date">
        Due: {new Date(task.dueDate).toLocaleDateString()}
      </div>

      <div className="task-actions">
        <select value={task.status} onChange={handleStatusChange}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;