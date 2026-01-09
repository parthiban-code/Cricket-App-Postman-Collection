const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');
const scoreController = require('../controllers/score.controller');

// Define your endpoints
router.post('/scores', auth, scoreController.addScore);
router.get('/scores/:matchId', auth, scoreController.getScoresByMatch);

module.exports = router;
