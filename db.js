// db.js

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // Use the postgres user
    host: 'localhost', // Assuming PostgreSQL is running locally
    database: 'ToDoList', // Replace with your database name
    password: 'new_password',
    port: 5434, // Default PostgreSQL port
});

module.exports = pool;
