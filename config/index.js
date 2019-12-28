const dotenv = require('dotenv').config();

module.exports = {
    mongodb: {
        host: process.env.MONGO_HOST,
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        port: process.env.MONGO_PORT,
    }
}