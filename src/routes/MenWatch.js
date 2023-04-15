const express = require('express');
const router = express.Router();

const MenWatchController = require('../app/controllers/MenWatchController');

router.get('/create', MenWatchController.create);
router.get('/:slug', MenWatchController.show);

module.exports = router;
