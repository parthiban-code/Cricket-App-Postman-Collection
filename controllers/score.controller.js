const db = require('../config/db.config');

// Add a score entry (ball-by-ball)
exports.addScore = (req, res) => {
  const match_id = req.params.id;
  const { over_no, ball_no, batsman_id, bowler_id, runs, wicket, extra_type } = req.body;

  const sql = `
    INSERT INTO scores (match_id, over_no, ball_no, batsman_id, bowler_id, runs, wicket, extra_type)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [match_id, over_no, ball_no, batsman_id, bowler_id, runs, wicket, extra_type], err => {
    if (err) return res.status(500).json({ error: 'Failed to record score' });
    res.json({ message: 'Score recorded' });
  });
};

// Get scorecard for a match
exports.getScoresByMatch = (req, res) => {
  const match_id = req.params.id;

  const sql = `
    SELECT s.*, b.name AS batsman_name, bo.name AS bowler_name
    FROM scores s
    LEFT JOIN players b ON s.batsman_id = b.id
    LEFT JOIN players bo ON s.bowler_id = bo.id
    WHERE s.match_id = ?
    ORDER BY s.over_no, s.ball_no
  `;

  db.query(sql, [match_id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch scorecard' });
    res.json(results);
  });
};
