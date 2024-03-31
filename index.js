// Import required modules
const express = require('express');
const methodOverride = require('method-override');
const pool = require('./db');
// Create an instance of the Express application
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware for method override
app.use(methodOverride('_method'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

// Test route to verify database connection
app.get('/test-db-connection', async (req, res) => {
    try {
        // Example query: Select the current date from PostgreSQL
        const result = await pool.query('SELECT CURRENT_DATE');
        res.json({ message: 'Database connection successful', result: result.rows });
    } catch (error) {
        console.error('Error connecting to database:', error);
        res.status(500).json({ error: 'Database connection error' });
    }
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('\x1b[35m%s\x1b[0m', 'Server is running on http://localhost:3000');
});
