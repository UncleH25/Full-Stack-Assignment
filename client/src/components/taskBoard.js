/**
 * This component renders the task board which displays all tasks in a grid.
 * It includes a search bar to filter tasks by title, a task form to create new tasks, and task columns to display tasks.
 * The task columns are organized by status (to do, in progress, done) and tasks can be updated and deleted from the columns.
 */
function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState(''); // Search query to filter tasks by title

  /**
   * Fetches all tasks from the API and updates the state with the result.
   * Called when the component mounts and when the search query changes.
   */
  const loadTasks = async () => {
    const res = await fetchTasks(search);
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks(); // Fetches tasks when the component mounts and when the search query changes
  }, [search]);

  /**
   * Creates a new task by calling the createTask API endpoint.
   * Updates the state with the new task.
   * Called when the task form is submitted.
   */
  const handleCreate = async (taskData) => {
    await createTask(taskData);
    loadTasks();
  };

  /**
   * Updates an existing task by calling the updateTask API endpoint.
   * Updates the state with the updated task.
   * Called when a task is updated from a task column.
   */
  const handleUpdate = async (id, updatedData) => {
    await updateTask(id, updatedData);
    loadTasks();
  };

  /**
   * Deletes an existing task by calling the deleteTask API endpoint.
   * Updates the state with the deleted task.
   * Called when a task is deleted from a task column.
   */
  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  // Filter tasks by status
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