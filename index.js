const express = require('express');
const messages = require('./app/messages');

const app = express();
const port = '8000';

app.use(express.json());
app.use('/messages', messages);

app.listen(port, () => {
    console.log('We are live on  ' + port);
});