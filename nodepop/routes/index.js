var express = require('express');
var router = express.Router();

// const bp = require('body-parser')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodepop' });
});


module.exports = router;
