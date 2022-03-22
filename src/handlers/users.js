const repository = require('../services/repositories/users')

const createUser = async user => await repository.storeUser(user);

const findUser = async user => await repository.getOne(user);

module.exports = {
    createUser,
    findUser
};