const { Category } = require('../models');

const addCategory = async (data) => {
    const addData = await Category.create(data);
    return { message: addData };
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();
    return allCategories;
};

module.exports = {
    addCategory,
    getAllCategories,
};