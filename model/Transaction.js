const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Transaction = sequelize.define("transaction",{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  type: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Transaction