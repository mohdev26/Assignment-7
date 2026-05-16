const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnection');

class Comment extends Model {}
Comment.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    content: { type: DataTypes.TEXT }
}, { 
    sequelize, 
    modelName: 'Comment' 
});

module.exports = Comment;