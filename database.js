const mysql = require('mysql2');

// Create the connection to MySQL database
const db = mysql.createConnection({
    host: 'localhost',  //  localhost
    user: 'root',  // THis is  MySQL username
    password: '',  //  I didn't set a password
    database: 'records'  //  database name
});

// Connected to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;
