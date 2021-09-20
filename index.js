const sequelize = require("./util/database")
const Shop = require('./model/Shop')
const Order = require("./model/Order")

Shop.hasMany(Order)
sequelize.sync({alter: true})