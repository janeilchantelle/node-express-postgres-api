
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR
);


CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    title VARCHAR,
    description TEXT,
    due_date DATE,
    priority VARCHAR,
    category_id INTEGER REFERENCES categories(category_id),
    completed BOOLEAN
);
