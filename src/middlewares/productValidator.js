const functionModels = require('../models/productsModels');

const productValidator = async (req, res, next) => {
  const { id } = req.params;
  const result = await functionModels.getByIdModels(id);
  if (result.length < 1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = productValidator;