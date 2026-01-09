const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Check if Authorization header is present
  if (!authHeader) {
    return res.status(403).json({ error: 'Authorization header missing' });
  }

  // Format: "Bearer <token>", so split it
  const parts = authHeader.split(' ');

  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(400).json({ error: 'Invalid authorization format. Expected: Bearer <token>' });
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};
