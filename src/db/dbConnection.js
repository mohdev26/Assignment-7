const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('assignment_7', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306 
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Connection error:', err));

module.exports = sequelize;