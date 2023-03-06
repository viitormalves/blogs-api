const { Category } = require('../models');

const addCategory = async (data) => {
    const addData = await Category.create(data);
    return { message: addData };
};

module.exports = {
    addCategory,
};