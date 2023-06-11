const db = require('../models/database/config')

module.exports = {
    videoMetadata: async function(request, response) {
        if (request.params.id === '') {
            return response.json({
                status: 'FAIL',
                statusCode: 400,
                message: 'video id cannot be blank'
            })
        }
        try {
            const SQL = 'select * from metadata where id = ?';
            const [result] = await db.query(SQL, [request.params.id]);
            console.log(result)
            if (result.length === 0) {
                throw new Error('video not found');
            }
            return response.json({
                status: 'OK',
                statusCode: 200,
                message: [result][0][0]
            })
        } catch(err) {
            return response.json({
                status: 'NOT FOUND',
                statusCode: 404,
                message: 'video with the given id is not found'
            })
        }
    },
    upload: async function(request, response) {
        try {
            if (request.body.title === '') {
                throw new Error('Video title cannot be empty');
            }
            const SQL = 'insert into metadata (title, description) values (?, ?)';
            const result = await db.query(SQL, [request.body.title, request.body.description]);
            return response.json({
                status: 'OK',
                statusCode: 200,
                message: 'video metadata inserted into the database',
                videoID: result[0].insertId
            });
        } catch(err) {
            return response.json({
                status: 'FAIL',
                statusCode: 404, 
                message: 'Something went wrong inserting the metadata',
                error: err.message
            });
        }
    },
    max_id: async function(request, response) {
        try {
            const SQL = 'select Max(id) from metadata';
            const [result] = await db.query(SQL);
            return response.json({
                status: 'OK',
                statusCode: 200,
                message: result[0]
            })
        } catch(err) {
            return response.json({
                status: 'FAIL',
                statusCode: 404,
                message: 'Something went wrong while interacting with the database',
                errorMessage: err.message
            })
        }
    },
    all: async function(request, response) {
    	try {
            const SQL = 'select * from metadata';
            const [result] = await db.query(SQL);
            return response.json({
                status: 'OK',
                statusCode: 200,
                allVideos: result
            })
    	} catch(err) {
            return response.json({
                status: 'FAIL',
                statusCode: 404,
                message: 'Something went wrong while with the database',
                errorMessage: err.message
            })
        }
    }
}
