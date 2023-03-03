module.exports = (sequelize, DataTypes) => {
    const PostCategories = sequelize.define('Posts_categories', {}, {
        timestamps: false,
        tableName: 'posts_categories',
        underscore: true,
    });
    PostCategories.associate = (models) => {
        models.blog_posts.belongsToMany(models.categories, {
            foreignKey: 'postId',
            otherKey: 'categoryId',
            through: PostCategories,
            as: 'categories'
        });
        models.categories.belongsToMany(models.blog_posts, {
            foreignKey: 'categoryId',
            otherKey: 'postId',
            through: PostCategories,
            as: 'posts'
        });
    };
    return PostCategories
};