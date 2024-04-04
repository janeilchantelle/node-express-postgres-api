const express = require('express');
const methodOverride = require('method-override');
const supertest = require('supertest');
const pool = require('./db');
const tasksRouter = require('./routes/tasks');


const app = express();

app.use(express.static('public'));
app.use('/images', express.static('images'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Mount the tasks router
app.use('/tasks', tasksRouter);

// Define other routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/test-db-connection', async (req, res) => {
    try {
        const result = await pool.query('SELECT CURRENT_DATE');
        console.log('\x1b[32m%s\x1b[0m', 'Database connection successful');
        res.json({ message: 'Database connection successful', result: result.rows });
    } catch (error) {
        console.error('Error connecting to database:', error);
        console.log('\x1b[31m%s\x1b[0m', 'Database connection error');
        res.status(500).json({ error: 'Database connection error' });
    }
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, async () => {
    console.log('\x1b[35m%s\x1b[0m', 'Server is running on http://localhost:3000');
    
    const request = supertest(server);
    try {
        await request.get('/test-db-connection');
    } catch (error) {
        console.error('Error calling test-db-connection route:', error);
    }
});

module.exports = server;
