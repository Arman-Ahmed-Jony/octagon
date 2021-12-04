const exporess = require("express");
const responseBeautifier = require("../middleware/responseBeautifier");
const router = exporess.Router();
const transactionService = require("../service/TransactionService");

router.get("/", (req, res, next) => {
  
}, responseBeautifier);

module.exports = router;