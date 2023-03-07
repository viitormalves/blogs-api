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

const getAllUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: 'password' } });
    return users;
};

const getUserById = async (id) => {
    const userData = await User.findByPk(id);
    if (!userData) return { type: 404, message: 'User does not exist' };
    const { password: _, ...userWithoutPassword } = userData.dataValues;
    return { message: userWithoutPassword };
};

const deleteUserMe = async (id) => User.destroy({ where: { id } });

module.exports = {
    Login,
    addUser,
    getAllUsers,
    getUserById,
    deleteUserMe,
};