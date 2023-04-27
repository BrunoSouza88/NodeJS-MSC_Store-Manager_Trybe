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

module.exports = {
  getAllModels,
  getByIdModels,
  createProductModels,
};
