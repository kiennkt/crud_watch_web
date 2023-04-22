const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');

router.get('/stored/watches', MeController.storedWatches);
router.get('/trash/watches', MeController.strashWatches);
module.exports = router;
