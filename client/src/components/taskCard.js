/**
 * This component renders a single task card with its title, description, due date, status, and actions.
 * The task card has a select dropdown to update the status of the task, and a delete button to delete the task.
 * The component receives three props: task, onUpdate, and onDelete.
 * task is an object containing the task's id, title, description, status, and due date.
 * onUpdate is a function that updates the task with the new status.
 * onDelete is a function that deletes the task with the given id.
 */
function TaskCard({ task, onUpdate, onDelete }) {
  const handleStatusChange = (e) => {
    // Update the task with the new status
    onUpdate(task.id, { ...task, status: e.target.value });
  };

  return (
    <div className="task-card">
      <div className="task-title">{task.title}</div>
      <div className="task-description">{task.description}</div>
      <div className="task-due-date">
        //Display the due date of the task in a human-readable format
        Due: {new Date(task.dueDate).toLocaleDateString()}
      </div>

      <div className="task-actions">
        //Render a select dropdown to update the status of the task
        <select value={task.status} onChange={handleStatusChange}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        //Render a delete button to delete the task
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;