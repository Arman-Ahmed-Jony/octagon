/**
 * this class is not used yet
 * and it won't be used as we have used Product.belongsToMany(Order, { through: 'ProductOrder' }); and
                                        Order.belongsToMany(Product, { through: 'ProductOrder' });

                                        in the index file
 */

const Sequelize = require('sequelize')
const sequelize = require('../util/database')
const Order = require("./Order")
const Product = require('./Product')

const productOrder = sequelize.define("productOrder",{
  ProductId: {
    type: DataTypes.INTEGER,
    references: {
      model: Order, // 'Movies' would also work
      key: 'id'
    }
  },
  OrderId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product, // 'Actors' would also work
      key: 'id'
    }
  }
});

module.exports = productOrder