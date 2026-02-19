import React from 'react';
import TaskCard from './taskCard';
import '../styles/taskColumn.css';

function TaskColumn({ title, tasks, onUpdate, onDelete }) {
  return (
    <div className="task-column">
      <div className="column-title">{title}</div>
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskColumn;