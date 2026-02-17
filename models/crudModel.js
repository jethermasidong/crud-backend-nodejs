import db from "../config/db";

const create = async(newData, callback) => {
    db.query('INSERT INTO users SET ?', newData, callback);
};

const read = async(id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

const update = async(id, updateData, callback) => {
    db.query('UPDATE users SET ? WHERE id = ?', [updateData, id], callback);
};

const deleted = async(id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
};



export default {create, read, update, deleted};