import db from "../config/db";

const User = {
    create: (data, callback) => {
        const sql = `
            INSERT INTO business
            (name, email, password)
            VALUES (?, ?, ?)
            `;

            db.query(sql,
                [
                    data.name,
                    data.email,
                    data.password,
                ],
                callback
            );
    }
}