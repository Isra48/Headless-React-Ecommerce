let products = [
  {
    name: "Sandalias",
    id: 1001,
    amount: "$10,800",
    due:
      "10/31/2000"
  },
  {
    name: "Sudadera",
    id: 1002,
    amount: "$8,000",
    due: "10/31/2000"
  },
  {
    name: "Licuadora",
    id: 1003,
    amount: "$9,500",
    due: "07/22/2003"
  },
  {
    name: "Pantalla",
    id: 1004,
    amount: "$14,000",
    due: "09/01/1997"
  },
  {
    name: "Sandalias",
    id: 1005,
    amount: "$10,800",
    due: "12/05/1995"
  },
  {
    name: "Sudadera",
    id: 1006,
    amount: "$8,000",
    due: "10/31/2000"
  },
  {
    name: "Licuadora",
    id: 1007,
    amount: "$9,500",
    due: "07/22/2003"
  },
  {
    name: "Pantalla",
    id: 1008,
    amount: "$14,000",
    due: "09/01/1997"
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
