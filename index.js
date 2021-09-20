const sequelize = require("./util/database")
const Shop = require("./model/Shop")
const Order = require("./model/Order")

Shop.hasMany(Order)
sequelize.sync({force: true})
  .then((result) => {
    console.log(result);
    return Shop.create({
      name: "Bura Kaka",
      location: "amtola"
    })
  }).then(shop => {
    console.log('shop created', shop);
    return shop.createOrder({product: "coke 250ml", price: 410})
  }).then((order) => {
    console.log('order created', order);
    return Order.findAll()
  }).then(result => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err);
  });