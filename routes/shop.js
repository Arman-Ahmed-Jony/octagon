const express = require("express");
const responseBeautifier = require("../middleware/responseBeautifier");
const router = express.Router();
const ShopService = require("../service/ShopService");
const ProductService = require("../service/ProductService");
const OrderService = require("../service/OrderService");
const Shop = require("../model/Shop");
const Product = require("../model/Product");
const lodash = require("lodash");
router.get(
  "/",
  (req, res, next) => {
    ShopService.findAll()
      .then((result) => {
        req.body = result;
      })
      .catch((err) => {
        req.body = err;
        req.responseStatus = 500;
      })
      .finally(() => next());
  },
  responseBeautifier
);

router.post(
  "/",
  (req, res, next) => {
    ShopService.create(req.body)
      .then((result) => {
        req.body = result;
      })
      .catch((err) => {
        req.body = err;
        req.responseStatus = 500;
      })
      .finally(() => next());
  },
  responseBeautifier
);

router.patch(
  "/:id",
  (req, res, next) => {
    ShopService.update({ id: req.params.id, ...req.body })
      .then((result) => {})
      .catch((err) => {
        req.body = err;
        req.responseStatus = 500;
      })
      .finally(() => next());
  },
  responseBeautifier
);

router.delete(
  "/:id",
  (req, res, next) => {
    ShopService.softDelete(req.params.id)
      .then((result) => {
        req.body = result;
      })
      .catch((err) => {
        req.body = err;
        req.responseStatus = 500;
      })
      .finally(() => next());
  },
  responseBeautifier
);

router.get(
  "/:id/order",
  (req, res, next) => {
    OrderService.findAll({ include: [{ all: true }] })
      .then((result) => {
        req.body = result;
      })
      .catch((err) => {
        req.body = err;
        req.responseStatus = 500;
      })
      .finally(() => next());
  },
  responseBeautifier
);

router.post(
  "/:id/order",
  (req, res, next) => {
    OrderService.create(
      { ...req.body, shopId: req.params.id }
      // { include: [Shop] }
    )
      .then((order) => {
        return Promise.all(
          req.body.products.map((product) => {
            return ProductService.findById(product.id)
              .then((productInstence) => {
                return order.addProduct(productInstence, {
                  through: {
                    unitPrice: product.unitPrice,
                    quantity: product.quantity,
                  },
                });
              })
              .catch((err) => {});
          })
        );
      })
      .then((val) => {})
      .catch((err) => {
        req.body = err;
        req.responseStatus = 500;
      })
      .finally(() => next());
  },
  responseBeautifier
);

// TODO 1. add order availability check exception
// TODO 2. patch api should store data that are comes from client side and update the data in database and return the updated data to client side
router.patch(
  "/:shopId/order/:orderId",
  (req, res, next) => {
    OrderService.findById(req.params.orderId, { include: [Product] })
      .then((order) => {
        // update comment of that order
        OrderService.update({comment: req.body.comment, id: req.params.orderId})
        // remove products from order that are not available in the request body
        lodash.differenceBy(order.products, req.body.products, "id").forEach( product => {
          order.removeProduct(product);
        })
        req.body.products.forEach(product => {
          ProductService.findById(product.id).then((productInstence) => {
            order.addProducts(productInstence,{
              through: {
                unitPrice: product.unitPrice,
                quantity: product.quantity,
              },
            })
          })
        });
      })
      .catch((err) => {
        req.body = err;
        req.responseStatus = 500;
      })
      .finally(() => next());
  },
  responseBeautifier
);
module.exports = router;
