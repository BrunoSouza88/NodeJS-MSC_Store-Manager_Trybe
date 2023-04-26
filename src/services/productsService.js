const functionModels = require('../models/productsModels');

const getAllService = async () => { 
  const products = await functionModels.getAllModels();
  return products;
};

const getByIService = async (productId) => {
  const productById = await functionModels.getByIdModels(productId);
  return productById;
 };

module.exports = {
  getAllService,
  getByIService,
};
