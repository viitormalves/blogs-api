const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

const newUserValidation = async ({ displayName, email, password }) => {
    if (displayName.length < 8) {
        return { type: 400, message: '"displayName" length must be at least 8 characters long' };
    }
    if (!emailRegex.test(email)) {
        return { type: 400, message: '"email" must be a valid email' };
    }
    if (password.length < 6) {
        return { type: 400, message: '"password" length must be at least 6 characters long' };
    }
    return { type: '' };
};

module.exports = {
    newUserValidation,
};