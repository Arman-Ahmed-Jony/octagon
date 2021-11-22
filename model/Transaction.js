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
    type: Sequelize.ENUM('CREDIT', 'DEBIT'),
    allowNull: false,
  },
  entityType: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  entityId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null
  }
},
{
  paranoid: true
});

module.exports = Transaction