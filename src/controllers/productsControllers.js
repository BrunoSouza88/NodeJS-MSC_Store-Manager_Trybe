const functionService = require('../services/productsService');

const getAllControllers = async (_req, res) => {
  const products = await functionService.getAllService();
  return res.status(200).json(products);
};

const getByIdController = async (req, res) => {
  const { id } = req.params;
  const [productByID] = await functionService.getByIService(id);
  if (productByID === undefined) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(productByID);
};
 
module.exports = {
  getAllControllers,
  getByIdController,
};