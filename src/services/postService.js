const { Category, PostCategory, BlogPost } = require('../models');
const { newPostValidation } = require('./validations/postValidation');

const addBlogPost = async (data) => {
    const { type, message } = await newPostValidation(data);
    if (type) return { type, message };
    
    const { categoryIds, title, content, userId } = data;

    const allCategories = await Category.findAll({ where: { id: categoryIds } });
    if (allCategories.length !== categoryIds.length) {
        return { type: 400, message: 'one or more "categoryIds" not found' };
    }

    const { dataValues } = await BlogPost
    .create({ title, content, categoryIds, userId, updated: new Date(), published: new Date() });

    await Promise
    .all(categoryIds.map((categoryId) => PostCategory
      .create({ categoryId, postId: dataValues.id })));

    return { message: dataValues };
};

module.exports = {
    addBlogPost,
};