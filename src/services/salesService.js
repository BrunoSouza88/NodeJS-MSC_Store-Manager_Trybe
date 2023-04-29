const functionSalesModels = require('../models/salesModels');

// req 6
const addNewSale = async (fullSale) => {
  await functionSalesModels.insertTimeSale();
  const lastSale = await functionSalesModels.getLastSaleById();
  const { id } = lastSale[0][0];
  const newSaleObj = { id: id + 1 };
  const itemsSold = [];
  await Promise.all(
    fullSale.map(async (element) => {
      await functionSalesModels.insertSale(element.productId, element.quantity, id + 1);
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
  const result = sales.map((element) => ({
    saleId: element.sale_id,
    date: element.date,
    quantity: element.quantity,
    productId: element.product_id,
  }));
  return result;
};

const getSalesByIdService = async (salesId) => {
  const saleById = await functionSalesModels.getSalesByIdModels(salesId);
  const result = saleById.map((element) => ({
    date: element.date,
    quantity: element.quantity,
    productId: element.product_id,
  }));
  return result;
};

const deleteSalesService = async (saleId) => {
  await functionSalesModels.deleteSalesModels(saleId);
  return true;
};

module.exports = {
  addNewSale,
  getAllSalesService,
  getSalesByIdService,
  deleteSalesService,
};