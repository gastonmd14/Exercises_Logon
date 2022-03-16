const userModel = require('../../models/users')

const persist = (user) => {
    try {
        const userToCreate = user;
        const result = userModel.create(userToCreate);
                
    } catch (e) {
        console.log('Error: ', e);
    }
};


module.exports = {
    persist
};