const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Order = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  // product: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },
  // price: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // }
  payment: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  },
  isDelivered: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});

module.exports = Order;
