const express = require('express');
const router = express.Router();
const date = new Date();

const fs = require('fs');
const path = './messages';
let messagesArray = [];

fs.readdir(path, (err, files) => {
    files.forEach(file => {
        messagesArray.push(path + '/' + file);
    });
    if (messagesArray.length >= 5) {
        messagesArray = messagesArray.slice(-5);
    }
})

router.post('/', (req, res) => {
    fs.writeFileSync(`./messages/${date.toISOString()}.json`, JSON.stringify({
        ...req.body,
        datetime: date.toISOString()
    }));
    res.send('Created');
});

router.get('/', (req, res) => {
    res.send(
        messagesArray.map(m => {
            return JSON.parse(fs.readFileSync(m, (err, f) => {
                console.log(f)
            }))
        })
    )
});

module.exports = router;
