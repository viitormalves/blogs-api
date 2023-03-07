const { postService } = require('../services');

const addBlogPost = async (req, res) => {
    const data = req.body;
    const { id } = req.data;
    data.userId = id;

    const { type, message } = await postService.addBlogPost(data);
    if (type) return res.status(type).json({ message });
    return res.status(201).json(message);
};

const getAllPosts = async (_req, res) => {
    const allPosts = await postService.getAllPosts();
    res.status(200).json(allPosts);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await postService.getPostById(Number(id));
    if (type) return res.status(type).json({ message });
    res.status(200).json(message);
};

const updatedPostById = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const userId = req.data.id;
    data.id = id;
    data.userId = userId;
    const { type, message } = await postService.updatedPostById(data);
    if (type) return res.status(type).json({ message });
    res.status(200).json(message);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    const userId = req.data.id;
    const { type, message } = await postService.deletePost({ id, userId });
    if (type) return res.status(type).json({ message });
    return res.status(204).end();
};

module.exports = {
    addBlogPost,
    getAllPosts,
    getPostById,
    updatedPostById,
    deletePost,
};