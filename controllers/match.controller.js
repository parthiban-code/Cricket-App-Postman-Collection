const db = require('../config/db.config');

// Create Match
exports.createMatch = (req, res) => {
  const { title, teamA, teamB, location, overs, toss, tossDecision} = req.body;
  const userId = req.user.id;

  const sql = 'INSERT INTO matches (title, teamA, teamB, location, overs, toss, tossDecision, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [title, teamA, teamB, location, overs, toss, tossDecision, userId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error creating match' });
    res.status(201).json({ message: 'Match created successfully' });
  });
};

// Get All Matches
exports.getMatches = (req, res) => {
  db.query('SELECT * FROM matches WHERE created_by = ?', [req.user.id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error fetching matches' });
    res.json(results);
  });
};

// Get Match by ID
exports.getMatchById = (req, res) => {
  const matchId = req.params.id;
  db.query('SELECT * FROM matches WHERE id = ?', [matchId], (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ error: 'Match not found' });
    res.json(results[0]);
  });
};

// End Match
exports.endMatch = (req, res) => {
  const matchId = req.params.id;
  db.query('UPDATE matches SET status = ? WHERE id = ?', ['ended', matchId], (err) => {
    if (err) return res.status(500).json({ error: 'Error ending match' });
    res.json({ message: 'Match ended' });
  });
};
