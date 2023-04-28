const functionSalesService = require('../services/salesService');

// req 6
const postSale = async (req, res) => {
  const newSale = await functionSalesService.addNewSale(req.body);
  console.log(newSale);
  return res.status(201).json(newSale);
};

// req 8
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
  postSale,
  getAllSalesControllers,
  getSalesByIdController,
};