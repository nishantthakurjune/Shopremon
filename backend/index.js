const express = require('express');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/dataRoutes');
require('dotenv').config();

// Create Express app
const app = express();

// Body parser
app.use(express.json());

// Mount routes
app.use('/api/data', dataRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: 'Server Error'
    });
});

// Database connection and server startup
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to the server", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });