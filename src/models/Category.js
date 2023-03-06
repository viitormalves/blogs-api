'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING
  },{
    tableName: 'categories',
    timestamps: false,
  });
  return Categories;
};