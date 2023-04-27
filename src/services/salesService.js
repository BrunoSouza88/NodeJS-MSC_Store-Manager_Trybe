const functionSalesModels = require('../models/salesModels');

const getAllSalesService = async () => {
  const sales = await functionSalesModels.getAllSalesModels();

  return sales;
};

const getSalesByIdService = async (salesId) => {
  const saleById = await functionSalesModels.getSalesByIdModels(salesId);
  console.log('sales service', saleById);
  return saleById;
};

module.exports = {
  getAllSalesService,
  getSalesByIdService,
};