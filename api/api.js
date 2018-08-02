const Express = require('express');


const routeOrders = require('./routes/orders');
const routeProducts = require('./routes/products');

const app = Express();

app.use('/orders', routeOrders);
app.use('/products', routeProducts);

module.exports = app;