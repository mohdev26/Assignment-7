const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnection');

class Post extends Model {}
Post.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.TEXT }
}, { 
    sequelize, 
    modelName: 'Post', 
    paranoid: true 
});

module.exports = Post;