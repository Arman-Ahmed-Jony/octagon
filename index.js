const sequelize = require("./util/database")
// const ShopService = require("./service/ShopService")
// const OrderService = require("./service/OrderService")
const Shop = require('./model/Shop')
const Order = require("./model/Order")

Shop.hasMany(Order)
sequelize.sync({alter: true})
  // .then((result) => {
  //   console.log(result);
  //   return ShopService.create({
  //     name: "Bura Kaka",
  //     location: "amtola"
  //   })
  // }).then(shop => {
  //   // ShopService.softDelete(shop.id)
  //   console.log('shop created', shop);
  //   return shop.createOrder({product: "coke 250ml", price: 410})
  // }).then((order) => {
  //   console.log('order created', order);
  //   return OrderService.findAll()
  // }).then(result => {
  //   console.log(result)
  // })
  // .catch((err) => {
  //   console.log(err);
  // });