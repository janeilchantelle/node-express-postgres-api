// Import required modules
const express = require('express');
const methodOverride = require('method-override');

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

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('\x1b[35m%s\x1b[0m', 'Server is running on http://localhost:3000');
});
