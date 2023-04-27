const connection = require('./connection');

const getAllSalesModels = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales;',
  );
  return result;
};

const getSalesByIdModels = async (saleId) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products WHERE sale_id = ? ORDER BY sale_id;',
    [saleId],
  );
  return result;
};

module.exports = {
  getAllSalesModels,
  getSalesByIdModels,
};