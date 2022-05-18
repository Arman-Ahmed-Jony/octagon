const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Product = sequelize.define("product",{
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
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: true
  }
}, {
  paranoid: true,
});

module.exports = Product