const sequelize = require("../util/database");
const Shop = require("./Shop");
const Order = require("./Order");
const Product = require("./Product");
const ProductOrder = require("./ProductOrder");
const ProductDetails = require("./ProductDetails");
const Transaction = require("./Transaction");
const User = require("./User");
const PartiesOfTransaction = require("./PartiesOfTransaction");

Product.belongsToMany(Order, { through: ProductOrder });
Order.belongsToMany(Product, { through: ProductOrder });
Shop.hasMany(Order);
Order.belongsTo(Shop)
Product.hasOne(ProductDetails);
ProductDetails.belongsTo(Product);
Transaction.belongsTo(User);
sequelize.sync({alert: true})
  .then(() => {
    return PartiesOfTransaction.bulkCreate([{
      id:1,
      name: 'SHOP',
      label: 'Shop'
    },
    {
      id:2,
      name: 'USER',
      label: 'User'
    },
    {
      id:3,
      name: 'VENDOR',
      label: 'Vendor'
    }])
  }).catch(err => {
    console.log('data insertion error');
  });
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
