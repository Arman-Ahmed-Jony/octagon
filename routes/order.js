const express = require("express");
const responseBeautifier = require("../middleware/responseBeautifier");
const router = express.Router();
const OrderService = require("../service/OrderService");
const { Op } = require("sequelize");

router.get(
  "/",
  (req, res, next) => {
    console.log(req.query);
    let offset = (new Number(req.query.page) - 1 || 0) * (new Number(req.query.limit) || 10) || 0;
    OrderService.findAndCountAll({
      include: [{ all: true }],
      limit: parseInt(req.query.limit) || 10,
      offset: offset,
      distinct: true,
      order: [["createdAt", "DESC"]],
    })
      .then((result) => {
        req.body = {
          data: result.rows,
          total: result.count,
        };
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
    OrderService.update({ id: req.params.id, ...req.body })
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

module.exports = router;
