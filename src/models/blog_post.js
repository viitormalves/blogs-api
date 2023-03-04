'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Blog_post = sequelize.define('Blog_posts', {
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
  // Blog_post.associate = (model) => {
  //   Blog_post.belongsTo(model.User), {
  //     foreignKey: 'userId',
  //     as: 'users',
  //   }
  // };
  return Blog_post;
};