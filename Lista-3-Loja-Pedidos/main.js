const authView = require('./views/authView');
const orderView = require('./views/orderView');

const username = authView.loginUser();
const order = orderView.createOrder(username);
if (order) console.log(`✅ Pedido finalizado! Status: ${order.status}`);