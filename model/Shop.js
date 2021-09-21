const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Shop = sequelize.define("shop",{
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
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: true
  }
});

module.exports = Shop