const Sequelize = require("sequelize")

// const sequelize = new Sequelize('node_workshop', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

const sequelize = new Sequelize('tmp', 'admin', 'T$unaguDB2520231', {
  port: 3306,
  host: 'tsunagu-db-server.crryxxnsjkmx.us-east-2.rds.amazonaws.com',
  dialect: 'mysql'
});

module.exports = sequelize