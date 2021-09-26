const express = require("express");
const responseBeautifier = require("../middleware/responseBeautifier");
const router = express.Router();
const ShopService = require("../service/ShopService");
const ProductService = require("../service/ProductService");
const OrderService = require("../service/OrderService");
const Shop = require("../model/Shop");
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
      { ...req.body, shop: { id: req.params.id } },
      { include: [Shop] }
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

module.exports = router;
