const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

const productModel = require('../../../src/models/productsModels');

const productService = require('../../../src/services/productsService');

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
  name: "Homem-Formiga",
};

describe('', function () {
  this.afterEach(() => sinon.restore());

  it('', async function () {
    sinon.stub(productModel, 'getAllModels').resolves(mockAllProducts);

    const allProducts = await productModel.getAllModels();
    expect(allProducts).to.be.equal(mockAllProducts);
  });
  it('', async function () {
    sinon.stub(productModel, 'getByIdModels').resolves(mockOneProduct);

    const oneProduct = await productModel.getByIdModels(1);
    expect(oneProduct).to.be.equal(mockOneProduct);
  });
  it('', async function () {
    sinon.stub(productModel, 'getByIdModels').resolves(mockLastProduct);

    await productService.createProductService('Homem-Formiga');

    const lastProduct = await productService.getByIService(4);
    
    expect(lastProduct).to.be.equal(mockLastProduct);
  });
});