var express = require('express');
var router = express.Router();

/* GET users listing. */
// Put all API endpoints under '/api'
router.get('/passwords', (req, res) => {
    const count = 5;

    // Generate some passwords
    const passwords = Array.from(Array(count).keys()).map(i =>
        generatePassword(12, false)
    );

    // Return them as json
    res.json(passwords);
});

module.exports = router;
