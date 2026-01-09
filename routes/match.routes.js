const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');
const {
  createMatch,
  getMatches,
  getMatchById,
  endMatch
} = require('../controllers/match.controller');

router.post('/matches', auth, createMatch);
router.get('/matches', auth, getMatches);
router.get('/matches/:id', auth, getMatchById);
router.post('/matches/:id/end', auth, endMatch);

module.exports = router;
// This code defines the match routes for creating, retrieving, and ending matches.
// It imports the necessary modules, sets up the router, and defines the routes for match management