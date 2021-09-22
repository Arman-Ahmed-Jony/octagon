module.exports = function(req, res, next) {
  console.log("meddle ware called");
  const message = {};
  message.body = req.body;
  message.success = true;
  message.status = req.responseStatus || 200;
  console.log(res);
  res.status(message.status).send(message);
  return next();
};