const mysql = require('mysql2');

// connect to database 'projectsdatabase' on local machine
const pool = mysql.createPool({
    host: 'localhost',
    port:3306,
    user: 'root',
    database: 'projectsDatabase',
    password: ''
});

module.exports = pool.promise();