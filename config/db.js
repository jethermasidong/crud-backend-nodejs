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

export default db;