const db = require('../models/database/config')

module.exports = {
    health: function(request, response) {
        return response.json({
            status: 'OK',
            statusCode: 200,
            message: 'video data api running correctly'
        });
    },
    createdb: async (request, response) => {
        try {
            const result = await db.query('create database videoMetadata');
        } catch(err) {
            return response.json({
                message: err.message,
            })
        }
    }, 
    createTable: async (request, response) => {
        try {
            const result = await db.query('create table metadata (\
            username varchar(255) primary key,\
            password varchar(255) not null,\
            );')
        } catch(err) {
            return response.json({
                message: 'Table already exists' 
            })
        }
    }
}
