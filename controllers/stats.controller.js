const db = require('../config/db.config');

// Top Batsmen
exports.getTopBatsmen = (req, res) => {
  const sql = `
    SELECT p.name AS batsman, SUM(s.runs) AS total_runs
    FROM scores s
    JOIN players p ON s.batsman_id = p.id
    GROUP BY s.batsman_id
    ORDER BY total_runs DESC
    LIMIT 10
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch top batsmen' });
    res.json(results);
  });
};

// Top Bowlers
exports.getTopBowlers = (req, res) => {
  const sql = `
    SELECT p.name AS bowler, COUNT(*) AS wickets
    FROM scores s
    JOIN players p ON s.bowler_id = p.id
    WHERE s.wicket = 1
    GROUP BY s.bowler_id
    ORDER BY wickets DESC
    LIMIT 10
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch top bowlers' });
    res.json(results);
  });
};
