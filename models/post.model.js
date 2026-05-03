const { DataTypes } = require('sequelize');
const sequelize = require('./dbConnection');

const Post = sequelize.define('Post', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false }
}, {
    paranoid: true, 
    timestamps: true
});

module.exports = Post;