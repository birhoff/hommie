const express = require('express');
const router = express.Router();

/* GET users listing. */
// Put all API endpoints under '/api'
router.get('/passwords', (req, res) => {
    // Return them as json
    res.json({ status: "OK" });
});

module.exports = router;
