const functionSalesModels = require('../models/productsModels');

const validateProductId = async (req, res, next) => {
  const [products] = req.body;
  if (!products.productId) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  try {
    await Promise.all(
      req.body.map(async (element) => {
        const product = await functionSalesModels.getByIdModels(element.productId);
        if (product.length < 1) {
          throw new Error('Product not found');
        }
      }),
    );
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
  next();
};

const validateProductQuantity = (req, res, next) => {
  const [products] = req.body;
  if (products.quantity <= 0) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (!products.quantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  next();
};

const validateSaleId = async (req, res, next) => {
  const { id } = req.params;
  const productById = await functionSalesModels.getByIdModels(id);
  if (productById.length < 1) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  next();
};

module.exports = {
  validateProductId,
  validateProductQuantity,
  validateSaleId,
};