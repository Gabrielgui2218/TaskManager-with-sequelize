let { db } = require('../config/connection.js')

const createTask = (req, res) => {
    const { id, name, date } = req.body;
    
    const taskExist = db.some((task) => task.id === id)

    if (!taskExist) {
      db.push({
        id: id,
        name: name,
        date: date,
      });
      
      res.status(201).json({ message: 'Salvo com sucesso'})
    } 

    res.status(400).send('Usuario já existe na nossa base de dados')
  };

const getAllTasks = (req, res) =>{

    if(db.length >= 1){
        res.send(db).status(200)
    }

    return res.status(400).json({message: 'Não existem tasks no banco de dados'})
}

const updateTask = (req, res) => {
    const { id } = req.params;
    const { name, date } = req.body;
  
    const taskIndex = db.findIndex((task) => task.id === id);
  
    if (taskIndex !== -1) {
      db[taskIndex] = {
        ...db[taskIndex],
        name: name || db[taskIndex].name,
        date: date || db[taskIndex].date,
      };
  
      res.status(200).send('Task updated: ' + JSON.stringify(db[taskIndex]));
    } else {
      res.status(400).json({ message: 'Task not found' });
    }
  };
  
  const deleteTask = (req, res) => {
    const { id } = req.params;
  
    const taskIndex = db.findIndex((task) => task.id === id);
  
    if (taskIndex !== -1) {
      const deletedTask = db.splice(taskIndex, 1);
      res.status(200).send('Task deleted: ' + JSON.stringify(deletedTask));
    } else {
      res.status(400).json({ message: 'Task not found' });
    }
  };

  
module.exports = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask,
}


