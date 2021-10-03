const User = require("../model/User");

exports.create = (user) => User.create(user);
exports.update = (user) => {
  return User.update(user, {
    where: {
      id: user.id,
    },
  });
};
exports.delete = (id) =>
  User.destroy({
    where: {
      id,
    },
  });
exports.softDelete = (id) => this.update({ id, isActive: false });
exports.findAll = (opt = {}) => User.findAll(opt);
exports.findById = (id) =>
  User.findOne({
    where: {
      id,
    },
  });
exports.findByEmail = (email) =>
  User.findOne({
    where: {
      email,
    },
  });
