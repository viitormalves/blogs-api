const { userService } = require('../services');
const { createToken } = require('../auth/authToken');

const addUser = async (req, res) => {
    try {
        const data = req.body;
    const { type, message } = await userService.addUser(data);
    if (type) return res.status(type).json({ message });

    const { password: _, ...userWithoutPassword } = message;
    const token = createToken(userWithoutPassword);

    return res.status(201).json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno' });
    }
};

const getAllUsers = async (_req, res) => {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
};

module.exports = {
    addUser,
    getAllUsers,
};