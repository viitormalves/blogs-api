const { userService } = require('../services');
const { createToken } = require('../auth/authToken');

const Login = async (req, res) => {
    try {
        const data = req.body;
        if (!data.email || !data.password) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }

        const user = await userService.Login(data);
        if (!user) return res.status(400).json({ message: 'Invalid fields' });

        const { password: _, ...userWithoutPassword } = user.dataValues;
        const token = createToken(userWithoutPassword);

        return res.status(200).json({ token });
    } catch (error) {
       return res.status(500).json({ message: 'Erro interno' }); 
    }
};

module.exports = {
    Login,
};