const { User } = require('../models');
const { newUserValidation } = require('./validations/userValidation');

const Login = async ({ email, password }) => User.findOne({ where: { email, password } });

const addUser = async (data) => {
    const { type, message } = await newUserValidation(data);
    if (message) return { type, message };

    const { email } = data;
    const verify = await User.findOne({ where: { email } });
    if (verify) return { type: 409, message: 'User already registered' };

    const createUser = await User.create(data);
    return { message: createUser };
};

module.exports = {
    Login,
    addUser,
};