const functionSalesModels = require('../models/salesModels');

// req 6
const addNewSale = async (fullSale) => {
  await functionSalesModels.insertTimeSale();
  let lastSale = await functionSalesModels.getLastSaleById();
  lastSale = Number(lastSale[0][0].id);
  const newSaleObj = { id: lastSale + 1 };
  const itemsSold = [];
  await Promise.all(
    fullSale.map(async (element) => {
      await functionSalesModels.insertSale(element.productId, element.quantity, lastSale + 1);
      itemsSold.push({
        productId: element.productId,
        quantity: element.quantity,
      });
    }),
  );
return { ...newSaleObj, itemsSold };
};

// req 8
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
  addNewSale,
  getAllSalesService,
  getSalesByIdService,
};