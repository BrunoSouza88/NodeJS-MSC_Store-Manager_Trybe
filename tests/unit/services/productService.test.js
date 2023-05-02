const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const productsService = require('../../../src/services/productsService');
const productModel = require('../../../src/models/productsModels');
const { mockAllProducts, mockOneProduct } = require('../models/mocks');

describe('Testando service', function () {
  afterEach(() => sinon.restore());

  it('Retornando todos os produtos', async function () {
    sinon.stub(productModel, 'getAllModels').resolves(mockAllProducts);

    const result = await productsService.getAllService();

    expect(result).to.be.an('array');
    expect(result).to.have.length(3);
  })
  
  it('Retornando um produto por ID', async function () {
    sinon.stub(productModel, 'getByIdModels').resolves(mockOneProduct);

    const result = await productsService.getByIService(1);

    expect(result).to.be.an('object');
  })
  it('Testando ID errada', async function () {
    sinon.stub(productModel, 'getByIdModels').resolves({
      type: 404,
      message: 'Product not found',
    });
    const result = await productsService.getByIService(999);
    expect(result.type).to.be.equal(404);
    expect(result.message).to.be.equal('Product not found');
  })
})