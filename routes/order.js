const express = require("express");
const responseBeautifier = require("../middleware/responseBeautifier");
const router = express.Router();
const OrderService = require("../service/OrderService");

router.get(
  "/",
  (req, res, next) => {
    OrderService.findAll()
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
    OrderService.create(req.body)
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
    OrderService.update({id: req.params.id,...req.body})
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
    OrderService.softDelete(req.params.id)
      .then((result) => {
        req.body = result
      }).catch((err) => {
        console.log('err called', err);
        req.body = err
        req.responseStatus = 500
      }).finally(() => next());
  },
  responseBeautifier
)

module.exports = router;