const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createToken = (data) => jwt.sign({ data }, secret, { algorithm: 'HS256' });

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = {
    createToken,
    verifyToken,
};