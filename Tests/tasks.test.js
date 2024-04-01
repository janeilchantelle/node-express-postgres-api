const request = require('supertest');
const app = require('../index');

describe('Tasks API', () => {
    it('should fetch all tasks from the database', async () => {
        const response = await request(app).get('/tasks');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should fetch all tasks from the database via REST API', async () => {
        const response = await request(app).get('/tasks');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should create a new task in the database', async () => {
        const newTask = { title: 'Task Title', description: 'Task Description', due_date: '2024-03-31', priority: 'High', category_id: 1 };
        const response = await request(app).post('/tasks').send(newTask);
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(newTask);
    });

    it('should update an existing task in the database', async () => {
        // Assuming taskId is the ID of an existing task in the database
        const taskId = 1;
        const updatedTask = { title: 'Updated Title', description: 'Updated Description', due_date: '2024-04-30', priority: 'Low', category_id: 2 };
        const response = await request(app).put(`/tasks/${taskId}`).send(updatedTask);
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(updatedTask);
    });

    it('should delete a task from the database', async () => {
        // Assuming taskId is the ID of an existing task in the database
        const taskId = 1;
        const response = await request(app).delete(`/tasks/${taskId}`);
        expect(response.status).toBe(200);
        // Check response body if necessary
    });
});
