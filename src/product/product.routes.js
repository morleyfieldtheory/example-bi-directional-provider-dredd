const router = require('express').Router();
const productsController = require('./product.controller');
const lotDetailsController = require('./lotDetails.controller');

router.get("/products/product/:id", productsController.getById);
router.get("/products/products", productsController.getAll);
router.post("/products/products", productsController.create);

router.get("/lotDetails/display_lot_summary", lotDetailsController.getById);

module.exports = router;
