const express = require('express');
const router = express.Router();

const youla = require('./youla');

/* GET users listing. */

router.get('/passwords', (req, res) => {
    // Return them as json
    res.json({ status: "OK" });
});

router.get('/youla', youla);

module.exports = router;
