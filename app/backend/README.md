# Products API (mock)

API simples em Node.js + Express que retorna uma lista mockada de produtos (10 itens).

Como rodar:
```
cd app/backend
npm install
npm start
```

Endpoint:
- GET /products
  - Retorna 200 com JSON: array de produtos, cada um com { id, name, price } (price é inteiro)

Exemplo:
```
curl http://localhost:3000/products
```

Resposta esperada (exemplo):
```
[
  {"id":1,"name":"Caneca de Cerâmica","price":29},
  {"id":2,"name":"Camiseta Algodão","price":59},
  {"id":3,"name":"Fone Bluetooth","price":199},
  {"id":4,"name":"Caderno A5","price":12},
  {"id":5,"name":"Mochila Casual","price":149},
  {"id":6,"name":"Garrafa Térmica","price":79},
  {"id":7,"name":"Relógio Esportivo","price":299},
  {"id":8,"name":"Teclado Mecânico","price":399},
  {"id":9,"name":"Mouse Sem Fio","price":119},
  {"id":10,"name":"Almofada Decorativa","price":45}
]
```
