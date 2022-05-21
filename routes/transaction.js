const exporess = require("express");
const responseBeautifier = require("../middleware/responseBeautifier");
const router = exporess.Router();
const transactionService = require("../service/TransactionService");

router.get(
  "/",
  (req, res, next) => {
    transactionService
      .findAll({order: [["createdAt", "DESC"]],})
      .then((result) => {
        req.body = result;
        console.log(result);
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
