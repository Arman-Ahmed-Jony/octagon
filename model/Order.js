const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Order = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
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
  comments: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Order;
