const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Transaction = sequelize.define("transaction",{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  given: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  taken: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

module.exports = Transaction