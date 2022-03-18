var express = require('express');
var router = express.Router();
const handler = require('../handlers/users')

/* GET Login page. */
router.get('/login', function(req, res, next) {
    res.render('users/login', { title: 'Login', styles:'login', script: 'login' });
  });
  

/* GET Register page. */
router.get('/register', (req, res, next) => {
    res.render('users/register', { title: 'Register', styles:'register', script: 'register', err: 'err'});
});

/*POST Register page */
router.post('/register', async (req, res, next) => {
    try {
        const user = req.body;
        const result = handler.createUser(user);
        console.log(result, 'Usuario Creado');
    } catch (e) {
        console.log('Error: ', e);
    }
});


module.exports = router;