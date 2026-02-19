// Create centralized Express error handling middleware
// This middleware function catches any errors that occur in the application
// and returns a JSON response with an error message and a status code
// The purpose of this middleware is to provide a consistent error response
// format throughout the application, making it easier to debug and handle errors
module.exports = (err, req, res, next) => {
  // Log the error for debugging purposes
  console.error(err);

  // Return a JSON response with an error message and a status code
  res.status(500).json({
    message: 'Internal Server Error'
  });
};