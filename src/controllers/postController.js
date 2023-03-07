const { postService } = require('../services');

const addBlogPost = async (req, res) => {
    const data = req.body;
    const { id } = req.data;
    data.userId = id;

    const { type, message } = await postService.addBlogPost(data);
    if (type) return res.status(type).json({ message });
    return res.status(201).json(message);
};

module.exports = {
    addBlogPost,
};