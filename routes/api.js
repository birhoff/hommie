const express = require('express');
const router = express.Router();

const youla = require('./youla');

/* GET users listing. */
// Put all API endpoints under '/api'
router.get('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/passwords', (req, res) => {
    // Return them as json
    res.json({ status: "OK" });
});

router.get('/youla', youla);

module.exports = router;
