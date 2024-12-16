const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const database = require('./config/database');

const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoute = require('./routes/maps.routes');

// connect to database
database.connect();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});

// mount routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/captains', captainRoutes);
app.use('/api/v1/maps', mapsRoute);

module.exports = app;