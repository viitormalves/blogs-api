const { categoriesService } = require('../services');

const addCategory = async (req, res) => {
    const data = req.body;
    if (!data.name) return res.status(400).json({ message: '"name" is required' });
    const { message } = await categoriesService.addCategory(data);
    return res.status(201).json(message);
};

module.exports = {
    addCategory,
};