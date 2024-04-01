// routes/tasks.js

const express = require('express');
const router = express.Router();
const tasksDAL = require('../dal/tasksDAL');

// Route to list all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await tasksDAL.getAllTasks();
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to create a new task
router.post('/', async (req, res) => {
    try {
        const newTask = req.body;
        const createdTask = await tasksDAL.createTask(newTask);
        res.status(201).json(createdTask);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to update a task
router.put('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const updatedTask = req.body;
        const result = await tasksDAL.updateTask(taskId, updatedTask);
        res.json(result);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to delete a task
router.delete('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const result = await tasksDAL.deleteTask(taskId);
        res.json(result);
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
