const { Category, PostCategory, BlogPost, User } = require('../models');
const { newPostValidation, updatePostValidation } = require('./validations/postValidation');

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

const getAllPosts = async () => {
    const allPosts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return allPosts;
};

const getPostById = async (id) => {
    const post = await BlogPost.findOne({ where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    if (!post) return { type: 404, message: 'Post does not exist' };
    return { message: post.dataValues };
};

const updatedById = async (data) => {
    const { type, message } = await updatePostValidation(data);
    if (type) return { type, message };

    const post = await BlogPost.findByPk(data.id);
    if (post.userId !== data.userId) return { type: 401, message: 'Unauthorized user' };

    const { title, content, id } = data;
    await BlogPost.update({ title, content, updated: new Date() }, { where: { id } });

    const { dataValues } = await BlogPost.findOne({ where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    return { message: dataValues };
};

module.exports = {
    addBlogPost,
    getAllPosts,
    getPostById,
    updatedById,
};