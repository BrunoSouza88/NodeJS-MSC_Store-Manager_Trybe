const router = require('express').Router();

const {
  postSale,
  getAllSalesControllers,
  getSalesByIdController,
} = require('../controllers/salesControllers');

const {
  validateProductId,
  validateProductQuantity,
} = require('../middlewares/salesValidator');

router.get('/sales', getAllSalesControllers);

router.get('/sales/:id', getSalesByIdController);

router.post('/sales', validateProductQuantity, validateProductId, postSale);

module.exports = router;
