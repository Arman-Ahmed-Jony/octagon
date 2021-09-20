const Sequelize = require("sequelize")

const sequelize = new Sequelize('node_workshop', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize