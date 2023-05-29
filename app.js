const express = require('express')
const db = require('./config/connection.js')
const { createTask, getAllTasks, deleteTask, updateTask } = require('./controller/taskController.js')
const sequelize = require('./config/connection.js')
const app = express()
require('dotenv').config()

const PORT = 3000

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})

app.get('/task', getAllTasks)

app.post('/task', createTask)

app.put('task/:id', updateTask)

app.delete('task/:id', deleteTask)