const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');
const statsController = require('../controllers/stats.controller');

// Example stats endpoints
router.get('/stats/top-batsmen', auth, statsController.getTopBatsmen);
router.get('/stats/top-bowlers', auth, statsController.getTopBowlers);

module.exports = router;

