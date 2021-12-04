module.exports = function(req, res, next) {
  const message = {};
  message.body = req.body;
  message.success = true;
  message.status = req.responseStatus || 200;
  req.token && res.header("x-auth-token", req.token)
  res.status(message.status).send(message);
  return next();
};