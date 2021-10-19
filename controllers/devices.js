const DataBase = require('../models/database');

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const db = process.env.DB;

const getDevices = (req, res) => {
    const database = new DataBase(dbHost, dbPort, dbUser, dbPassword, db);
    
    const cb = (result) => {
        res.json({
            msg: 'get devices API - controller',
            result
        })
    }
    database.getDevices(cb);    
};

module.exports = {
    getDevices
}