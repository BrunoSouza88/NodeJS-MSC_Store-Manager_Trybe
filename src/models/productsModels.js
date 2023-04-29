const connection = require('./connection');

const getAllModels = async () => { 
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id;',
  );
  return result;
};

const getByIdModels = async (productId) => { 
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ? ORDER BY id;',
    [productId],
  );
  return result;
};

const createProductModels = async ({ name }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  return { id: insertId, name };
};

const updateProducModels = async (productId, name) => {
  const [product] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?;',
    [name, productId],
  );
  return product;
};

const deleteProductModels = async (productId) => {
  await connection.execute(
    'DELETE StoreManager.products FROM StoreManager.products WHERE id = ?;',
    [productId],
  );
  return true;
};

module.exports = {
  getAllModels,
  getByIdModels,
  createProductModels,
  updateProducModels,
  deleteProductModels,
};
