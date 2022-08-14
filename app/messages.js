const express = require('express');
const router = express.Router();
const fs = require('fs');
const date = new Date();

const fileMessageName = `../messages/m.json`;

router.post('/', (req, res) => {
    fs.writeFileSync(`./messages/${date.toISOString()}.txt`, JSON.stringify({...req.body, datetime: date.toISOString()}));
    res.send('Created');
});

router.get('/', (req, res) => {
    res.send('Get messages');
});

module.exports = router;