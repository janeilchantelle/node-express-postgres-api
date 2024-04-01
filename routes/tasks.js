// routes/tasks.js

const express = require('express');
const router = express.Router();
const tasksDAL = require('../dal/tasksDAL');

// Route to list all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await tasksDAL.getAllTasks();
        res.render('tasks', { tasks }); // Render tasks.ejs and pass tasks data
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to create a new task (showing a form)
router.get('/new', async (req, res) => {
    res.render('taskForm', { pageTitle: 'Create New Task', formAction: '/tasks' });
});

// Route to update an existing task (showing a form)
router.get('/:id/edit', async (req, res) => {
    const taskId = req.params.id;
    // Fetch task data based on taskId
    try {
        const task = await tasksDAL.getTaskById(taskId);
        res.render('taskForm', { pageTitle: 'Edit Task', formAction: `/tasks/${taskId}?_method=PUT`, task });
    } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to create a new task
router.post('/', async (req, res) => {
    try {
        const newTask = req.body;
        const createdTask = await tasksDAL.createTask(newTask);
        res.redirect('/tasks'); // Redirect to the tasks list page
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
        res.redirect('/tasks'); // Redirect to the tasks list page
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
        res.redirect('/tasks'); // Redirect to the tasks list page
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
