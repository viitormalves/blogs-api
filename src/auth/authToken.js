const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createToken = (data) => jwt.sign({ data }, secret, { algorithm: 'HS256' });

module.exports = {
    createToken,
};