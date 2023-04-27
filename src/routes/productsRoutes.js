const router = require('express').Router();

const {
  getAllControllers,
  getByIdController,
  createProductController,
} = require('../controllers/productsControllers');
const nameValidator = require('../middlewares/nameValidator');

router.get('/products', getAllControllers);

router.get('/products/:id', getByIdController);

router.post('/products', nameValidator, createProductController);

module.exports = router;