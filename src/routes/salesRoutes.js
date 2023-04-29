const router = require('express').Router();

const {
  postSale,
  getAllSalesControllers,
  getSalesByIdController,
} = require('../controllers/salesControllers');

const {
  validateProductId,
  validateProductQuantity,
  validateSaleId,
} = require('../middlewares/salesValidator');

router.get('/sales', getAllSalesControllers);

router.get('/sales/:id', validateSaleId, getSalesByIdController);

router.post('/sales', validateProductQuantity, validateProductId, postSale);

module.exports = router;
