//Importing required packages
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//Configuring environment variables
dotenv.config();

//Creating an express app
const app = express();

//Enabling CORS to allow cross-origin requests
app.use(cors());

app.use(express.json());

//Defining routes for tasks
app.use('/api/tasks', require('./routes/taskRoutes'));

//Catching any errors that occur in the application
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

//Getting the port from environment variables or defaulting to 5000
const port = process.env.PORT || 5000;

//Starting the server and listening on the port
const sequelize = require('./config/database');
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((error) => {
  console.error('Error syncing database:', error);
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});