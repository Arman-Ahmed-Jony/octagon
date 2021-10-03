const sequelize = require("../util/database");
const Shop = require("./Shop");
const Order = require("./Order");
const Product = require("./Product");
const ProductOrder = require("./ProductOrder");
const ProductDetails = require("./ProductDetails");
const Transaction = require("./Transaction");
const User = require("./User");

Product.belongsToMany(Order, { through: ProductOrder });
Order.belongsToMany(Product, { through: ProductOrder });
Shop.hasMany(Order);
Order.belongsTo(Shop)
Product.hasOne(ProductDetails);
ProductDetails.belongsTo(Product);
Transaction.belongsTo(Shop);
Transaction.belongsTo(User);
sequelize.sync({ alter: true });
module.exports = sequelize;
// const forceSync = async () => {
//   await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
//   await sequelize.sync({ force: true });
//   await sequelize.query('SET FOREIGN_KEY_CHECKS = 1'); // setting the flag back for security
// };
// forceSync()

//       await Order.findAll({
//         include: Product,
//       })
