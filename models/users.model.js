import mysql from 'mysql2/promise';
import dbConfig from '../server/config/db.config.js';

const pool = mysql.createPool(dbConfig);

const User = {
    getAll: async () => {
        const [rows] = await pool.execute('SELECT * FROM brukere');
        return rows;
    },
    create: async (newUser) => {
        const { navn, epost, passord } = newUser;
        const [result] = await pool.execute(
            'INSERT INTO brukere (navn, epost, passord) VALUES (?, ?, ?)',
            [navn, epost, passord]
        );
        const id = result.insertId;
        return { id, ...newUser };
    }
};

export default User;