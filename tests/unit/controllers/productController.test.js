const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { expect } = chai;
const productsController = require('../../../src/controllers/productsControllers');
const productsService = require('../../../src/services/productsService');
const { mockAllProducts, mockOneProduct } = require('../models/mocks');

describe('', function () {
  afterEach(sinon.restore);
  
  it('', async function () {
    sinon.stub(productsService, 'getAllService').resolves({ type: null, message: [mockAllProducts] });
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.getAllControllers(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([mockAllProducts]);
  })
  it('', async function () {
    sinon.stub(productsService, 'getByIService').resolves([mockOneProduct]);
    const res = {};
    const req = {
      params: {
        id: 1,
      },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.getByIdController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([mockOneProduct]);
  })
})