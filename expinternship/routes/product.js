var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Product add form');
});
router.get('/display', function(req, res, next) {
  res.send('Product DIsplay');
});

module.exports = router;
