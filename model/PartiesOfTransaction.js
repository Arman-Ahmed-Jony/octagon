const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const PartiesOfTransaction = sequelize.define("partiesOfTransaction",{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  label: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
});

module.exports = PartiesOfTransaction