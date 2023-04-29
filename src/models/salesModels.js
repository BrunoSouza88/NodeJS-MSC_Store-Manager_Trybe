const connection = require('./connection');

// req 6

const getLastSaleById = () => {
  const lastSaleOrdered = connection.execute(
    'SELECT id FROM StoreManager.sales ORDER BY id DESC LIMIT 1;',
  );
  return lastSaleOrdered;
};

const insertSale = (productId, quantity, sale) => {
  connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES  (?, ?, ?);',
    [sale, productId, quantity],
  );
};

const insertTimeSale = () => {
  const newDate = new Date();
  const newDateFormat = newDate.toISOString().slice(0, 19).replace('T', ' ');

  connection.execute(
    'INSERT INTO sales (date) VALUES (?);',
    [newDateFormat],
  );
};

// req 8
const getAllSalesModels = async () => {
  const [result] = await connection.execute(
    `SELECT * 
    FROM StoreManager.sales AS S 
    INNER JOIN StoreManager.sales_products AS SP
    ON S.id = SP.sale_id;`,
  );
  return result;
};

const getSalesByIdModels = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT * 
    FROM StoreManager.sales as S
    INNER JOIN StoreManager.sales_products as SP
    ON S.id = SP.sale_id
    WHERE S.id = ?;`,
    [saleId],
  );
  return result;
};

const deleteSalesModels = async (saleId) => {
  await connection.execute(
    'DELETE StoreManager.sales FROM StoreManager.sales WHERE id = ?;',
    [saleId],
  );
  return true;
};

module.exports = {
  getLastSaleById,
  insertSale,
  insertTimeSale,
  getAllSalesModels,
  getSalesByIdModels,
  deleteSalesModels,
};