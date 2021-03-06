const Order = require("../model/Order");

exports.create = (order) => Order.create(order);
exports.update = (order) => {
  return Order.update(order, {
    where: {
      id: order.id,
    }
  });
};
exports.delete = (id) =>
  Order.destroy({
    where: {
      id,
    },
  });
exports.softDelete = (id) => this.update({ id, isActive: false });
exports.findAll = (opt = {}) => Order.findAll(opt);
exports.findAndCountAll = (opt = {}) => Order.findAndCountAll(opt);
exports.findById = (id, opt = {}) =>
  Order.findOne({
    where: {
      id,
    }, ...opt
  });
