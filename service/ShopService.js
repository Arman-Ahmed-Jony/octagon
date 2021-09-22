const Shop = require("../model/Shop");

exports.create = (shop) => Shop.create(shop);
exports.update = (shop) => {
  return Shop.update(shop, {
    where: {
      id: shop.id,
    },
  });
};
exports.delete = (id) =>
  Shop.destroy({
    where: {
      id,
    },
  });
exports.softDelete = (id) => this.update({ id, isActive: false });
exports.findAll = () => Shop.findAll();
exports.findById = (id) =>
  Shop.findOne({
    where: {
      id,
    },
  });
