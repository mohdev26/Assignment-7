const { DataTypes } = require('sequelize');
const sequelize = require('./dbConnection'); 

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { 
        type: DataTypes.STRING, 
        unique: true, 
        validate: { isEmail: true } 
    },
    password: { 
        type: DataTypes.STRING,
        validate: {
            checkPasswordLength(value) {
                if (value.length <= 6) throw new Error('Password must be > 6 chars');
            }
        }
    },
    role: { type: DataTypes.ENUM('user', 'admin'), defaultValue: 'user' }
}, {
    hooks: {
        beforeCreate: (user) => {
            if (user.name.length <= 2) throw new Error('Name must be > 2 chars');
        }
    }
});

module.exports = User;