
import express from 'express';
import mysql from 'mysql2';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening to port ${port}`);
});