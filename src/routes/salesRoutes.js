const router = require('express').Router();

const {
  getAllSalesControllers,
  getSalesByIdController,
} = require('../controllers/salesControllers');

router.get('/sales', getAllSalesControllers);

router.get('/sales/:id', getSalesByIdController);

module.exports = router;