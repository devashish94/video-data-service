const express = require('express');
const router = express.Router();
const controller = require('../controllers/rootController');

router
    .get('/health', controller.health)
    .get('/createDatabase', controller.createdb)
    .get('/createTable', controller.createTable)

module.exports = router;
