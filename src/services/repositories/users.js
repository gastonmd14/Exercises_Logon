const { User } = require('../../models');
const bcrypt = require('bcryptjs');

const storeUser = async (user) => {
    try {
        const userToCreate = user;
        console.log(userToCreate, '700');
        // userToCreate.password = bcrypt.hashSync(user.password, 8);
        // const result = await User.create(userToCreate);
        // return result;
    } catch (err) {
        console.log(err);
    }
};

const getOne = async (user) => {
    try {
        const userToFind = user;
        const result = await User.findOne({
            where: {
                email: userToFind.email
            }
        });
        return result;
    } catch (error) {
        console.log(err);
    }
};

module.exports = {
    storeUser,
    getOne
};