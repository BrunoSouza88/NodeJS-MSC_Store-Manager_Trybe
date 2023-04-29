const router = require('express').Router();

const {
  getAllControllers,
  getByIdController,
  createProductController,
  updateProducController,
} = require('../controllers/productsControllers');

const nameValidator = require('../middlewares/nameValidator');
const productValidator = require('../middlewares/productValidator');

router.get('/products', getAllControllers);

router.get('/products/:id', getByIdController);

router.put('/products/:id', nameValidator, productValidator, updateProducController);

router.post('/products', nameValidator, createProductController);

module.exports = router;