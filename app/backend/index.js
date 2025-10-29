const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Lista mockada com 10 produtos; price é inteiro
const products = [
  { id: 1, name: 'Caneca de Cerâmica', price: 29 },
  { id: 2, name: 'Camiseta Algodão', price: 59 },
  { id: 3, name: 'Fone Bluetooth', price: 199 },
  { id: 4, name: 'Caderno A5', price: 12 },
  { id: 5, name: 'Mochila Casual', price: 149 },
  { id: 6, name: 'Garrafa Térmica', price: 79 },
  { id: 7, name: 'Relógio Esportivo', price: 299 },
  { id: 8, name: 'Teclado Mecânico', price: 399 },
  { id: 9, name: 'Mouse Sem Fio', price: 119 },
  { id: 10, name: 'Almofada Decorativa', price: 45 }
];

// GET /products -> retorna array de produtos
app.get('/products', (req, res) => {
  res.json(products);
});

// rota raiz simples
app.get('/', (req, res) => {
  res.send('API de Produtos — use GET /products');
});

app.listen(PORT, () => {
  console.log(`Products API rodando em http://localhost:${PORT}`);
});
