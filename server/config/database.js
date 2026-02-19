//Importing Sequelize and creating a new instance that connects to a SQLite database
const { Sequelize } = require('sequelize');
module.exports = new Sequelize(
  'database', 
  null, 
  null,
  {
    dialect: 'sqlite',
    storage: 'database.sqlite'
  }
);
