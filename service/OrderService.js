const Order = require("../model/Order");

exports.create = (Order) => Order.create(Order);
exports.update = (Order) => {
  if (!Order.id) {
    throw new Error("id is required");
  }
  return Order.update(Order, {
    where: {
      id: Order.id,
    },
  });
};
exports.delete = (id) =>
  Order.destroy({
    where: {
      id,
    },
  });
exports.softDelete= id => this.update({id, isActive: false})
exports.findAll = () => Order.findAll();
exports.findById = (id) =>
  Order.findOne({
    where: {
      id,
    },
  });
