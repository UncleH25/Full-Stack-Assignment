//This model represents a task, which has a title, description, status and due date.
//The status can be one of the following: 'todo', 'in-progress', 'done'.
//The due date must not be in the past.
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.ENUM('todo', 'in-progress', 'done'),
    defaultValue: 'todo'
  },
  dueDate: {
    type: DataTypes.DATE,
    validate: {
      isDateInFuture(value) {
        if (value && value < new Date()) {
          throw new Error('Due date cannot be in the past');
        }
      }
    }
  }
}, {
  timestamps: true
});

module.exports = Task;