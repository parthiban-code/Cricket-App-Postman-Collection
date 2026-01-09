const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/user.routes');
const playerRoutes = require('./routes/player.routes');
const matchRoutes = require('./routes/match.routes');
const scoreRoutes = require('./routes/score.routes');
const statsRoutes = require('./routes/stats.routes');

app.use('/api', userRoutes);
app.use('/api', playerRoutes);
app.use('/api', matchRoutes);
app.use('/api', scoreRoutes);
app.use('/api', statsRoutes);

module.exports = app;
