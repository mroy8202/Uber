const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const database = require('./config/database');

const userRoutes = require('./routes/user.routes')

// connect to database
database.connect();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/user', userRoutes);

module.exports = app;