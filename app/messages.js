const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('Post messages');
});

router.get('/', (req, res) => {
    res.send('Get messages');
});

module.exports = router;