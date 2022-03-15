var express = require('express');
var router = express.Router();
const controller = require('../controllers/users')

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'Login', script: 'login' });
});

/* GET Register page. */
router.get('/register', controller.register);

/*POST Register page */
router.post('/register', controller.storeRegister);


module.exports = router;
