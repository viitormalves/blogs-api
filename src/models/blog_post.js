'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const BlogPostsModel = sequelize.define('Blog_posts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  },{
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  });
  BlogPostsModel.associate = (models) => {
    BlogPostsModel.belongsTo(models.User), {
      foreignKey: 'userId',
      as: 'user',
    }
  }
  return Blog_post;
};