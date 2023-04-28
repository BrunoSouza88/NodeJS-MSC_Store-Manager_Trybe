const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

const connection = require('../../../src/models/connection');

const productModel = require('../../../src/models/productsModels');

const mockAllProducts = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

const mockOneProduct = {
  id: 1,
  name: "Martelo de Thor",
};

const mockLastProduct = {
  id: 4,
  name: "Homem Passaro",
};

describe('', function () {
  this.afterEach(() => sinon.restore());

  it('', async function () {
    sinon.stub(connection, 'execute').resolves([mockAllProducts]);

    const allProducts = await productModel.getAllModels();
    expect(allProducts).to.be.equal(mockAllProducts);

  });
  it('', async function () {
    sinon.stub(connection, 'execute').resolves([mockOneProduct]);

    const oneProduct = await productModel.getByIdModels(1);
    expect(oneProduct).to.be.equal(mockOneProduct);
  });
  it('', async function () {
    sinon.stub(connection, 'execute').resolves([mockLastProduct]);

    const lastProduct = await productModel.getByIdModels(4);
    expect(lastProduct).to.be.equal(mockLastProduct);
  });
});