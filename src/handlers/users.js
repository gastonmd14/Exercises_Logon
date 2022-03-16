const repository = require('../services/repositories/users')


const createUser = (user) => {
    repositories.persist(user);
}


module.exports = {
    createUser
};