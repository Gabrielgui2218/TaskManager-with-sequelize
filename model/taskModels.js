const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import the initialized Sequelize connection

const Task = sequelize.define('Task', {
  id_task: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'task_manager_tb' // Replace with your actual table name
});

module.exports = Task