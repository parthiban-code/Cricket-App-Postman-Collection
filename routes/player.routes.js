const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');
const {
  addPlayer,
  getPlayers,
  updatePlayer,
  deletePlayer
} = require('../controllers/player.controller');

router.post('/players', auth, addPlayer);
router.get('/players', auth, getPlayers);
router.put('/players/:id', auth, updatePlayer);
router.delete('/players/:id', auth, deletePlayer);

module.exports = router;
// This code defines the player routes for adding, retrieving, updating, and deleting players.
// It imports the necessary modules, sets up the router, and defines the routes for player management