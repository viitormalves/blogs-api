module.exports = (sequelize, DataTypes) => {
    const PostCategories = sequelize.define('PostCategory', {
        post_id: { type: DataTypes.INTEGER, primaryKey: true },
        category_id: { type: DataTypes.INTEGER, primaryKey: true },
    }, {
        timestamps: false,
        tableName: 'posts_categories',
        underscore: true,
    });
    PostCategories.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            foreignKey: 'post_id',
            otherKey: 'category_id',
            through: 'PostCategories',
            as: 'categories'
        });
        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: 'category_id',
            otherKey: 'post_id',
            through: 'PostCategory',
            as: 'posts'
        });
    };
    return PostCategories
};