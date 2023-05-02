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

const mockAllSales = [
  {
    "saleId": 1,
    "date": "2023-04-27T03:00:00.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "saleId": 2,
    "date": "2023-04-27T03:00:00.000Z",
    "productId": 2,
    "quantity": 2
  },
]

const mockSaleWrongId = {
  "message": "Sale not found",
}

const mockOneProduct = {
  id: 1,
  name: "Martelo de Thor",
};

module.exports = {
  mockAllProducts,
  mockOneProduct,
  mockAllSales,
  mockSaleWrongId,
}