const { DataTypes } = require('sequelize');
const sequelize = require('./dbConnection');

const Comment = sequelize.define('Comment', {
    content: { type: DataTypes.STRING, allowNull: false },
    postId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Comment;