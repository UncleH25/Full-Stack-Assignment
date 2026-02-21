import React, { useState } from 'react';
import '../styles/taskForm.css';

/**
 * This component renders a form for creating a new task.
 * It includes input fields for the task title, description, and due date.
 * When the form is submitted, it calls the onCreate function with the task data.
 * It also handles error checking for the form fields.
 */
function TaskForm({ onCreate }) {
  const [title, setTitle] = useState(''); // The title of the task
  const [description, setDescription] = useState(''); // The description of the task
  const [dueDate, setDueDate] = useState(''); // The due date of the task
  const [error, setError] = useState(''); // The error message to display if the form is invalid

  /**
   * Handles the form submission by calling the onCreate function with the task data.
   * It also checks for errors in the form fields and displays an error message if necessary.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the title is empty
    if (!title) {
      setError('Title is required');
      return;
    }

    // Check if the due date is empty or in the past
    if (!dueDate || new Date(dueDate) < new Date()) {
      setError('Due date must be in the future');
      return;
    }

    // If there are no errors, call the onCreate function with the task data
    onCreate({ title, description, dueDate });
    setTitle('');
    setDescription('');
    setDueDate('');
    setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      {error && <div className="form-error">{error}</div>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;