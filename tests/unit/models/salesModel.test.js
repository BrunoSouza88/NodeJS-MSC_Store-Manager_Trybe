const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;
const connection = require('../../../src/models/connection');

const salesProduct = require('../../../src/models/salesModels');
const { mockAllSales, mockSaleWrongId } = require('./mocks');

describe('Testando Product Sale', function () {
  afterEach(() => sinon.restore());
  it('Testando retorno de todos as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([mockAllSales]);

    const result = await salesProduct.getAllSalesModels();

    expect(result).to.be.an('array');
    expect(result).to.have.length(2);
  });
  it('Testando sale por ID', async function () {
    sinon.stub(connection, 'execute').resolves([mockAllSales][0]);

    const result = await salesProduct.getSalesByIdModels(1);

    expect(result).to.be.an('object');
    expect(result).to.contain.keys(['saleId', 'date', 'productId', 'quantity']);
  })
  it('Testando erro se ID errado', async function () {
    sinon.stub(connection, 'execute').resolves([mockSaleWrongId]);

    const result = await salesProduct.getSalesByIdModels(1000000);
    
    expect(result.message).to.be.equal('Sale not found');
  })
})