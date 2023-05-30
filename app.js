const express = require('express')
const connectDB = require('./config/connection.js')
const { createTask, getAllTasks, deleteTask, updateTask } = require('./controller/taskController.js')
const sequelize = require('./config/connection.js')
const tasks = require('./routes/taskRoutes.js');

const app = express()
require('dotenv').config()

const PORT = 3000

app.use(express.json())

app.use('/api/v1/tasks', tasks);

const port = process.env.PORT || 3000

const start = async () => {
    try{
        await connectDB
        app.listen(port, () => {
        console.log('Servidor conectado na porta 3000')});   
    }catch(error){
        console.log(error);
    }    
}

start()