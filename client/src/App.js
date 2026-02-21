/**
 * The App component is the top-level component of the application.
 * It renders the TaskBoard component, which is responsible for displaying all tasks.
 */
function App() {
  return (
    // The TaskBoard component is rendered here
    // It receives tasks as a prop and displays them in a grid
    <TaskBoard />
  );
}

// Export the App component as the default export
export default App;