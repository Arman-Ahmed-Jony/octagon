const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Shop = sequelize.define("shop",{
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
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
  }
});

module.exports = Shop