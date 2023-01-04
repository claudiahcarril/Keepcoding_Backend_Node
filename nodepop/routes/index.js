var express = require('express');
var router = express.Router();

// const bp = require('body-parser')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodepop' });
});

router.post('/en_el_body', (req, res, next) => {
  console.log(req.body)
  res.send('ok')
})


module.exports = router;
