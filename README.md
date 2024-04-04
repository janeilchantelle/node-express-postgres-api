# Task Manager App

Welcome to the Task Manager App! This is a web application designed to help you organize your tasks and manage your to-do lists effectively.

## Features

- Create new tasks with titles, descriptions, due dates, priorities, and categories.
- Edit existing tasks to update their information.
- Delete tasks that are no longer needed.
- View a list of all tasks along with their details.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- EJS (Embedded JavaScript) for templating
- CSS for styling

## Getting Started

To run the Task Manager App on your local machine, follow these steps:

1. Clone this repository to your local machine:
https://github.com/janeilchantelle/node-express-postgres-api.git

2. Install dependencies:


3. Set up your PostgreSQL database:
   - Create a new database named `task_manager_db`.
   - Run the SQL script provided in the `database.sql` file to set up the database schema and initial data.

4. Configure the database connection:
   - Rename the `.env.example` file to `.env`.
   - Update the database connection details in the `.env` file according to your PostgreSQL setup.

5. Start the server:

node index.js

6. Open your web browser and navigate to `http://localhost:3000` to access the Task Manager App.

## Usage

- Create a new task:
  - Click on the "Create New Task" button to add a new task.
  - Fill in the task details in the form and click "Submit" to create the task.

- Edit a task:
  - Click on the "Edit" link next to a task to edit its details.
  - Update the task information in the form and click "Update Task" to save the changes.

- Delete a task:
  - Click on the "Delete" button next to a task to delete it.
  - Confirm the deletion when prompted.

- View all tasks:
  - The main page displays a list of all tasks along with their details.

## Contributing

If you'd like to contribute to the Task Manager App, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them to your branch.
4. Push your changes to your fork.
5. Submit a pull request to the main repository's `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



