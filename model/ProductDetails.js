const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const ProductDetails = sequelize.define("productDetails",{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0
  }
});

module.exports = ProductDetails