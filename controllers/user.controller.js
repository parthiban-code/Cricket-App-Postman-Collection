const db = require('../config/db.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User
exports.register = async (req, res) => {
  const { name, mobile, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query('INSERT INTO users (name, mobile, password) VALUES (?, ?, ?)',
    [name, mobile, hashedPassword],
    (err) => {
      if (err) return res.status(500).json({ error: 'Registration failed' });
      res.status(201).json({ message: 'User registered successfully' });
    }
  );
};

// Login User
exports.login = (req, res) => {
  const { mobile, password } = req.body;

  db.query('SELECT * FROM users WHERE mobile = ?', [mobile], async (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: 'User not found' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET);
    res.json({ token });
  });
};
