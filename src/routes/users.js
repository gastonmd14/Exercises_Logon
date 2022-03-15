var express = require('express');
var router = express.Router();
const controller = require('../controllers/users')

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'Login', script: 'login' });
});



/* GET home page. */
router.get('/register', controller);

router.post('/register', function(req, res, next) {
  res.render('users/register', { title: 'Register', script: 'register', err: 'err'});
});


module.exports = router;
