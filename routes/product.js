var express = require("express");
var router = express.Router();
const Product = require("../controllers/product.js");

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get("/", function (req, res, next) {
  res.send(Product.getProducts(req.query.q));
});

module.exports = router;
