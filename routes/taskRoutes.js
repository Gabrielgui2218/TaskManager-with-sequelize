const express = require('express')
const router = express.Router()

const {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
} = require('../controller/taskController')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').patch(updateTask).delete(deleteTask)

module.exports = router