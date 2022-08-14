const express = require('express');
const app = express();
const port = '8000';

app.post('/messages', (req, res) => {
    res.send('Post messages');
});

app.get('/messages', (req, res) => {
    res.send('Get messages');
});


app.listen(port, () => {
    console.log('We are live on  ' + port);
});