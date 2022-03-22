var express = require('express');
var router = express.Router();
const handler = require('../handlers/users')

/* GET Login page. */
router.get('/signin', (req, res, next) => {
    res.render('auth/signin', { title: 'signin', styles:'signin', script: 'signin' });
});
  

/* GET Register page. */
router.get('/signup', (req, res, next) => {
    res.render('auth/signup', { title: 'signup', styles:'signup', script: 'signup', err: 'err'});
});

/*POST Register page */
router.post('/signup', async (req, res, next) => {
    try {
        const user = req.body;
        const result = handler.createUser(user);
        if (result) {
            res.status(200).json({message: 'User Created'});
        }
        res.status(401).json({message: 'Something Failed'});
    } catch (err) {
        res.status(500).json({message: err});
    }
});


module.exports = router;