const Shop = require("./model/Shop");

exports.create = (shop) => Shop.create(shop);
exports.update = (shop) => {
  if (!shop.id) {
    throw new Error("id is required");
  }
  Shop.update(shop, {
    where: {
      id: shop.id,
    },
  });
};
exports.delete = (id) =>
  Shop.distroy({
    where: {
      id,
    },
  });
exports.findAll = () => Shop.findAll();
exports.findById = (id) =>
  Shop.findOne({
    where: {
      id,
    },
  });
