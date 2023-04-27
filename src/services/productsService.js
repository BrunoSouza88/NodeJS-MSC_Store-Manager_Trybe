const functionModels = require('../models/productsModels');

const getAllService = async () => { 
  const products = await functionModels.getAllModels();
  return products;
};

const getByIService = async (productId) => {
  const productById = await functionModels.getByIdModels(productId);
  return productById;
 };

const createProductService = async (name) => {
  const newProduct = await functionModels.createProductModels(name);
  
  return { type: null, message: newProduct };
};

module.exports = {
  getAllService,
  getByIService,
  createProductService,
};
