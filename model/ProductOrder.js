/**
 * this class is not used yet
 * and it won't be used as we have used Product.belongsToMany(Order, { through: 'ProductOrder' }); and
                                        Order.belongsToMany(Product, { through: 'ProductOrder' });

                                        in the index file
 */

const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const Order = require("./Order");
const Product = require("./Product");

const productOrder = sequelize.define("productOrder", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  unitPrice: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: Product,
      key: Product.id,
    }
  },
  orderId: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: Order.id
    }
  },
  
});

module.exports = productOrder;
