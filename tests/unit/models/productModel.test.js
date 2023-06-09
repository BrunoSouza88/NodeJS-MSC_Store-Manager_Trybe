const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;
const productModel = require('../../../src/models/productsModels');
const connection = require('../../../src/models/connection');

const { mockAllProducts, mockOneProduct } = require('./mocks');

describe('Testando Product Model', function () {
  afterEach(() => sinon.restore());

  it('Retornando todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([mockAllProducts])
    const result = await productModel.getAllModels();

    expect(result).to.be.an('array');
    expect(result).to.have.length(3);
  })
  it('Retornando um produto por ID', async function () {
    sinon.stub(connection, 'execute').resolves([mockOneProduct])
    const result = await productModel.getByIdModels(1);

    expect(result).to.be.an('object');
    expect(result).to.contain.keys(['id', 'name']);
  })
  
})