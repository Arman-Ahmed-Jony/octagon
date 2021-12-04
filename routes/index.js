const authRoute = require("./auth");
const subscribesRoute = require("./subscribers");
const usersRoute = require("./users");
const productRoute = require("./product");
const orderRoute = require("./order");
const shopRoute = require("./shop");
const transactionRoute = require("./transaction");

const routes = [
  {
    path: "/auth",
    component: authRoute,
  },
  { path: "/subscribers", component: subscribesRoute },
  { path: "/users", component: usersRoute },
  {
    path: "/products",
    component: productRoute,
  },
  {
    path: "/orders",
    component: orderRoute,
  },
  {
    path: "/shops",
    component: shopRoute,
  },
  {
    path: "/transactions",
    component: transactionRoute,
  },
];

module.exports = function setRoutes(app) {
  routes.forEach((route) => {
    if (route.path && route.component) {
      app.use(route.path, route.component);
    }
  });
};
