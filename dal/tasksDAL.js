// tasksDAL.js

const pool = require('../db');

// Function to get all tasks
async function getAllTasks() {
    const query = 'SELECT * FROM tasks';
    const { rows } = await pool.query(query);
    return rows;
}

// Function to create a new task
async function createTask(newTask) {
    const { title, description, due_date, priority, category_id } = newTask;
    const query = 'INSERT INTO tasks (title, description, due_date, priority, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [title, description, due_date, priority, category_id];
    const { rows } = await pool.query(query, values);
    return rows[0];
}

// Function to update a task
async function updateTask(taskId, updatedTask) {
    const { title, description, due_date, priority, category_id } = updatedTask;
    const query = 'UPDATE tasks SET title = $1, description = $2, due_date = $3, priority = $4, category_id = $5 WHERE id = $6 RETURNING *';
    const values = [title, description, due_date, priority, category_id, taskId];
    const { rows } = await pool.query(query, values);
    return rows[0];
}

// Function to delete a task
async function deleteTask(taskId) {
    const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
    const values = [taskId];
    const { rows } = await pool.query(query, values);
    return rows[0];
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};
