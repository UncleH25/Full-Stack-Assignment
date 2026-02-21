/**
 * This component renders a task column with a title and a list of tasks.
 * It takes three props: title, tasks, onUpdate, and onDelete.
 * The title prop is used to display the title of the task column.
 * The tasks prop is an array of task objects, which are rendered as TaskCard components.
 * The onUpdate prop is a function that is called when a task is updated from a task column.
 * The onDelete prop is a function that is called when a task is deleted from a task column.
 */
function TaskColumn({ title, tasks, onUpdate, onDelete }) {
  // Render the task column with the given title and tasks
  return (
    <div className="task-column">
      // Render the title of the task column
      <div className="column-title">{title}</div>
      // Render the task list with the given tasks
      <div className="task-list">
        {tasks.map(task => (
          // Render a TaskCard component for each task
          // Pass the task, onUpdate, and onDelete props to the TaskCard component
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

// Export the TaskColumn component as the default export
export default TaskColumn;