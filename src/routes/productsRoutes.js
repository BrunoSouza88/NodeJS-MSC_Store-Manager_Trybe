const router = require('express').Router();

const { getAllControllers, getByIdController } = require('../controllers/productsControllers');

router.get('/products', getAllControllers);

router.get('/products/:id', getByIdController);

module.exports = router;