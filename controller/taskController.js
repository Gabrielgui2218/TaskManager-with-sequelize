const Task = require('../model/taskModels.js');

const createTask = async (req, res) => {
  const { name, date } = req.body;

  try {
    const task = await Task.create({
      name: name,
      date: date
    });

    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();

    if (tasks.length >= 1) {
      res.status(200).json(tasks);
    } else {
      res.status(400).json({ message: 'No tasks found in the database' });
    }
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, date } = req.body;

  try {
    const task = await Task.findByPk(id);

    if (task) {
      await task.update({
        name: name || task.name,
        date: date || task.date
      });

      res.status(200).json({ message: 'Task updated successfully', task });
    } else {
      res.status(400).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);

    if (task) {
      await task.destroy();
      res.status(200).json({ message: 'Task deleted successfully' });
    } else {
      res.status(400).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask
};