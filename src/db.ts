import { Database } from "sqlite3";

export const db = new Database("ts-api.db");

// Define a table schema
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT
  )
`;

// Execute the table creation query
db.run(createTableQuery, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Table created successfully');
  }
});

// Insert a new user
const insertQuery = `
  INSERT INTO users (name, email)
  VALUES (?, ?)
`;
const newUser = {
  name: 'John Doe',
  email: 'johndoe@example.com'
};

db.run(insertQuery, [newUser.name, newUser.email], function (err) {
  if (err) {
    console.error('Error inserting user:', err.message);
  } else {
    console.log(`A new user has been inserted with ID ${this.lastID}`);
  }
});