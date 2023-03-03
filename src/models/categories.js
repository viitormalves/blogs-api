'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING
  },{
    tableName: 'categories',
    timestamps: false,
  });
  return Categories;
};