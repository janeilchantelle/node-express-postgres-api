const pool = require('../db');

// Function to get all tasks
async function getAllTasks() {
    const query = 'SELECT * FROM tasks';
    const { rows } = await pool.query(query);
    return rows;
}

// Function to create a new task
async function createTask(newTask) {
    const { title, description, due_date, priority, category_id, completed } = newTask;
    const query = 'INSERT INTO tasks (title, description, due_date, priority, category_id, completed) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [title, description, due_date, priority, category_id, completed];
    const { rows } = await pool.query(query, values);
    return rows[0];
}

// Function to update a task
async function updateTask(task_id, updatedTask) {
    const { title, description, due_date, priority, category_id, completed } = updatedTask;
    const query = 'UPDATE tasks SET title = $1, description = $2, due_date = $3, priority = $4, category_id = $5, completed = $6 WHERE task_id = $7 RETURNING *';
    const values = [title, description, due_date, priority, category_id, completed, task_id];
    const { rows } = await pool.query(query, values);
    return rows[0];
}

async function deleteTask(task_id) {
    try {
        console.log('Deleting task with ID:', task_id);
        const query = 'DELETE FROM tasks WHERE task_id = $1 RETURNING *';
        const values = [task_id];
        const { rows } = await pool.query(query, values);
        console.log('Deleted task:', rows[0]);
        return rows[0];
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error; // Throw the error for further handling
    }
}



module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};
