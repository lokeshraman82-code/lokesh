const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express.js</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});
app.get('/services', (req, res) => {
    res.send('<h1>service land page</h1>');
});


app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(3002, () => {
    console.log('Express server running at http://localhost:3002');
});