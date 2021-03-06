const Product = require("../model/Product");

exports.create = (product) => Product.create(product);
exports.update = (product) => {
  return Product.update(product, {
    where: {
      id: product.id,
    },
    paranoid: false
  });
};
exports.delete = (id) =>
  Product.destroy({
    where: {
      id,
    },
    force: true
  });
exports.softDelete = (id) => Product.destroy({
  where: {
    id,
  }
});
exports.findAll = () => Product.findAll({paranoid: false});
exports.findById = (id) =>
  Product.findOne({
    where: {
      id,
    },
  });
