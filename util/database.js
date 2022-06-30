const Sequelize = require("sequelize")
console.log(process.env.NODE_ENV)
const databaseHost = process.env.DATABASE_HOST
const databaseName = process.env.DATABASE_NAME
const databaseUser = process.env.DATABASE_USER
const databasePassword = process.env.DATABASE_PASSWORD
const databasePort = process.env.DATABASE_PORT
const databaseDialect = process.env.DATABASE_DIALECT
const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
  host: databaseHost,
  dialect: databaseDialect,
});

// const sequelize = new Sequelize('tmp', 'admin', 'T$unaguDB2520231', {
//   port: 3306,
//   host: 'tsunagu-db-server.crryxxnsjkmx.us-east-2.rds.amazonaws.com',
//   dialect: 'mysql'
// });

module.exports = sequelize