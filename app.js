const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Jenkins CI/CD!');
});

module.exports = app; // Export the app for testing