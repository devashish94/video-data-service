module.exports = {
    health: function(request, response) {
        return response.json({
            status: 'OK',
            statusCode: 200,
            message: 'video data api running correctly'
        });
    }
}
