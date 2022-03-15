const handler = require('../handlers/users')

const controller = function(req, res, next) {
    res.render('users/register', { title: 'Register', script: 'register', err: 'err'});
};

module.exports = controller;