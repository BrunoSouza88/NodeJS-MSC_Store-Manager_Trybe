const functionSalesService = require('../services/salesService');

const getAllSalesControllers = async (_req, res) => {
  const sales = await functionSalesService.getAllSalesService();

  return res.status(200).json(sales);
};

const getSalesByIdController = async (req, res) => {
  const { id } = req.params;
  const [saleById] = await functionSalesService.getSalesByIdService(id);
  console.log('salebyid', saleById);
  return res.json(saleById);
};

module.exports = {
  getAllSalesControllers,
  getSalesByIdController,
};