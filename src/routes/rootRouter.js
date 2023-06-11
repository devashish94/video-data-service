const express = require('express');
const router = express.Router();
const controller = require('../controllers/rootController');

router
    .get('/health', controller.health)

module.exports = router;
