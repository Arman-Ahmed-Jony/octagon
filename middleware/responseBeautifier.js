module.exports = function(req, res, next) {
  const message = {};
  message.body = req.body;
  message.success = true;
  message.status = req.responseStatus || 200;
  res.status(message.status).send(message);
  return next();
};