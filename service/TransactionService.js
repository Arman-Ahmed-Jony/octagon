const Transaction = require("../model/Transaction");

exports.create = (transaction) => Transaction.create(transaction);
exports.update = (transaction) => {
  return Transaction.update(transaction, {
    where: {
      id: transaction.id,
    },
  });
};
exports.delete = (id) =>
Transaction.destroy({
    where: {
      id,
    },
  });
exports.softDelete = (id) => transaction.destroy({ id });
exports.findAll = (opt = {}) => Transaction.findAll(opt);
exports.findById = (id) =>
  Transaction.findOne({
    where: {
      id,
    },
  });
