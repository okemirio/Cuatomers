const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'your_database_host',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Display all the data of customers
connection.query('SELECT * FROM Customers', (err, results) => {
  if (err) {
    console.error('Error retrieving customers:', err);
    return;
  }
  console.log('Customers:', results);
});

// Display the product_name and category for products which their price is between 5000 and 10000
connection.query('SELECT product_name, category FROM Products WHERE price BETWEEN 5000 AND 10000', (err, results) => {
  if (err) {
    console.error('Error retrieving products:', err);
    return;
  }
  console.log('Products:', results);
});

// Display all the data of products sorted in descending order of price
connection.query('SELECT * FROM Products ORDER BY price DESC', (err, results) => {
  if (err) {
    console.error('Error retrieving products:', err);
    return;
  }
  console.log('Products:', results);
});

// Continue executing the rest of the queries...

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error closing connection:', err);
    return;
  }
  console.log('Connection closed');
});
