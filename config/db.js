import dotenv from 'dotenv';
config(dotenv);
import mysql from 'mysql2';

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitForConnectins: true,
    connectionLimit: 10000,
});


db.connect((err) => {
    if(err) {
        console.log('Database Connection Error', err)
    } else {
        console.log('Database Connected')
    }
});

const createUserTable = `
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created AT DATETIME DEFAULT CURRENT_TIMESTAMP
);`;


//For transferring table on your database host/domain
db.query(createUserTable, (err) => {
    if (err) console.error("Table User Error!", err);
    else console.log('User Table Create Successfully')
})

export default db;