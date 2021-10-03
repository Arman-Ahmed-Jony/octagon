const jwt = require("jsonwebtoken");

module.exports.generateJwtToken = (user, secret) => {
  return jwt.sign({
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
    },exp: Math.floor(Date.now() / 1000) + (60 * 60),
  },
    
    secret
  );
};

module.exports.decodeJwtToken = (token, secret) => {
  return jwt.verify(token, secret)
}