const Shop = require("../model/Shop");

exports.create = (shop) => Shop.create(shop);
exports.update = (shop) => {
  return Shop.update(shop, {
    where: {
      id: shop.id,
    },
    paranoid: false,
  });
};
exports.delete = (id) =>
  Shop.destroy({
    where: {
      id,
    },
    force: true,
  });
exports.softDelete = (id) => Shop.destroy({
  where: {
    id,
  }
});
exports.findAll = () => Shop.findAll({paranoid: false});
exports.findById = (id) =>
  Shop.findOne({
    where: {
      id,
    },
  });
