const { User } = require('../models');

const Login = async ({ email, password }) => User.findOne({ where: { email, password } });

module.exports = {
    Login,
};