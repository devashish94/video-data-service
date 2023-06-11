const express = require('express');
const router = express.Router();
const controller = require('../controllers/videoController');

router
    .get('/metadata/:id', controller.videoMetadata)
    .get('/max-existing-id', controller.max_id)
    .get('/all', controller.all)
    .post('/upload', controller.upload)
module.exports = router;

