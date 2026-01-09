const db = require('../config/db.config');

// Add Player
exports.addPlayer = (req, res) => {
  const { name, mobile, team, role } = req.body;
  const userId = req.user.id;

  db.query('INSERT INTO players (name, mobile, team, role, created_by) VALUES (?, ?, ?, ?, ?)',
    [name, mobile, team, role, userId],
    (err) => {
      if (err) return res.status(500).json({ error: 'Failed to add player' });
      res.status(201).json({ message: 'Player added' });
    }
  );
};

// Get All Players
exports.getPlayers = (req, res) => {
  db.query('SELECT * FROM players WHERE created_by = ?', [req.user.id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch players' });
    res.json(results);
  });
};

// Update Player
exports.updatePlayer = (req, res) => {
  const playerId = req.params.id;
  const { name, mobile, team, role } = req.body;

  db.query('UPDATE players SET name = ?, mobile = ?, team = ?, role = ? WHERE id = ?',
    [name, mobile, team, role, playerId],
    (err) => {
      if (err) return res.status(500).json({ error: 'Failed to update player' });
      res.json({ message: 'Player updated' });
    }
  );
};

// Delete Player
exports.deletePlayer = (req, res) => {
  const playerId = req.params.id;

  db.query('DELETE FROM players WHERE id = ?', [playerId], (err) => {
    if (err) return res.status(500).json({ error: 'Failed to delete player' });
    res.json({ message: 'Player deleted' });
  });
};
