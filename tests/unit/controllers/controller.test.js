const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const productController = require('../../../src/controllers/productsControllers');

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
  name: "Homem Passaro",
};

describe('', function () {
  this.afterEach(() => sinon.restore());
  it('', async function () {
    sinon.stub(productService, 'getAllService').resolves(mockAllProducts);
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getAllControllers(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });

  it('', async function () {
    sinon.stub(productService, 'getByIService').resolves(mockOneProduct);
    const req = {};
    req.params = {
      id: "1",
    };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getByIdController(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });
  it('', async function () {
    sinon.stub(productService);
    let req = {};
    req.body = {
      name: "Martelo de Thor",
    };
    let res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.createProductController(req, res);
    req.params = {
      id: "1",
    };

    await productController.getByIdController(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });
})