const handler = require('../handlers/users')

const controller = {
    register: (req, res, next) => {
        res.render('users/register', { title: 'Register', script: 'register', err: 'err'});
    },

    storeRegister: (req, res, next) => {
        res.render('users/register', { title: 'Register', script: 'register', err: 'err'});
      }
}

module.exports = controller;