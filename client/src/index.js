// Import React and ReactDOM from the react-dom library
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the App component from the App.js file
import App from './App';

// Import the index.css stylesheet to apply global styles to the application
import './styles/index.css';

// Create a root element in the DOM to render the application
const rootElement = document.getElementById('root');

// Create a root to render the application to
const root = ReactDOM.createRoot(rootElement);

// Render the App component to the DOM
root.render(
  // Enable React's Strict Mode to ensure that components are rendered correctly
  <React.StrictMode>
    // Render the App component
    <App />
  </React.StrictMode>
);