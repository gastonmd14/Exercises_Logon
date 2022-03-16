const { userModel } = require('../../models/user')

const persist = async (user) => {
    try {
        const userToCreate = user;
        const result = await userModel.create(userToCreate);
        return result;
    } catch (e) {
        console.log('Error: ', e);
    }
};


module.exports = {
    persist
};