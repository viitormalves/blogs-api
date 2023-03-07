const newPostValidation = async ({ title, content, categoryIds }) => {
    if (!title || !content || !categoryIds) {
        return { type: 400, message: 'Some required fields are missing' };
    }
    return { type: '' };
};

const updatePostValidation = async ({ title, content }) => {
    if (!title || !content) {
        return { type: 400, message: 'Some required fields are missing' };
    }
    return { type: '' };
};

module.exports = {
    newPostValidation,
    updatePostValidation,
};