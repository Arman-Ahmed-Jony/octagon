const Product = require("../model/Product");

exports.create = (product) => Product.create(product);
exports.update = (product) => {
  return Product.update(product, {
    where: {
      id: product.id,
    },
  });
};
exports.delete = (id) =>
  Product.destroy({
    where: {
      id,
    },
  });
exports.softDelete = (id) => this.update({ id, isActive: false });
exports.findAll = () => Product.findAll();
exports.findById = (id) =>
  Product.findOne({
    where: {
      id,
    },
  });
