var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const Nyear = new Date()
    let year = Nyear.getFullYear().toString();

    res.json({ year })
});

module.exports = router;
