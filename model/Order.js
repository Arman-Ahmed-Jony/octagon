const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Order = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
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
  comment: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

module.exports = Order;
