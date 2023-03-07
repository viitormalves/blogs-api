module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: { type: DataTypes.INTEGER, primaryKey: true },
        categoryId: { type: DataTypes.INTEGER, primaryKey: true },
    }, {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
    });
    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: 'categoryId', 
            otherKey: 'postId',
            through: PostCategory,
            as: 'posts',
          });
          models.BlogPost.belongsToMany(models.Category, {
              foreignKey: 'postId',
              otherKey: 'categoryId',
              through: PostCategory,
              as: 'categories',
          });
    };
    return PostCategory
};