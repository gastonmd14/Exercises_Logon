const repository = require('../services/repositories/users')

const createUser = async user => await repository.persist(user);

module.exports = {
    createUser
};