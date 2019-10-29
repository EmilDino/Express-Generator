var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bajersiden' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Test' });
});

router.get('/om-os', function(req, res, next) {
  res.render('om-os', { title: 'Om-os' });
});

module.exports = router;
