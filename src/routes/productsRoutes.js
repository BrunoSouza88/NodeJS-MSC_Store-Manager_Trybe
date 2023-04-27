const router = require('express').Router();

const {
  getAllControllers,
  getByIdController,
  createProductController,
} = require('../controllers/productsControllers');

router.get('/products', getAllControllers);

router.get('/products/:id', getByIdController);

router.post('/products', createProductController);

module.exports = router;