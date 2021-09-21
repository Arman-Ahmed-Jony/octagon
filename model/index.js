const sequelize = require("../util/database");
const Shop = require("./Shop");
const Order = require("./Order");
const Product = require("./Product");
const ProductDetails = require("./ProductDetails");
const Transaction = require("./Transaction");
const User = require("./User");

Shop.hasMany(Order);
Product.belongsToMany(Order, { through: "ProductOrder" });
Order.belongsToMany(Product, { through: "ProductOrder" });
Product.hasOne(ProductDetails);
// Shop.hasMany(Transaction);
Transaction.belongsTo(Shop)
Transaction.belongsTo(User)
sequelize
  .sync({ force: true })
module.exports = sequelize
//   .then((result) => {
//     console.log("product created");
//     return Product.create({ name: "mengo juice" });
//   })
//   .then((result) => {
//     console.log("created shop");
//     return Shop.create({ name: "mizan", location: "dhaka" });
//   })
//   .then((shop) => {
//     return shop.createOrder({ payment: 500 });
//   })
//   .then(async (order) => {
//     const product = await Product.findOne({
//       where: {
//         id: "2",
//       },
//     });
//     return order.addProducts(product);
//   })
//   .then(async (productOrder) => {
//     console.log(
//       await Order.findAll({
//         include: Product,
//       })
//     );
//   })
//   .catch((err) => {});
