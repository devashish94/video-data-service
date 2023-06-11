const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env')});
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || '127.0.0.1', 
    user: process.env.MYSQL_USER || 'root', 
    password: process.env.MYSQL_PASSWORD, 
    database: process.env.MYSQL_DATABASE || 'videoMetadata'
})

module.exports = pool;

