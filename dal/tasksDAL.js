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

module.exports = {
    getAllTasks,
    createTask,
    // Define functions for updating and deleting tasks as needed
};
