const authView = require('./views/authView');
const catalogView = require('./views/catalogView');
const orderView = require('./views/orderView');
const paymentView = require('./views/paymentView');
const chalk = require('chalk');

console.clear();
console.log(chalk.blue.bold('\n🎯 Bem-vindo à BeeCode - Sua Loja de Eletrônicos!\n'));

const username = authView.loginUser(); // Login obrigatório
catalogView.showCategories();
const order = orderView.createOrder(username);
paymentView.processPayment(order);

console.log(chalk.cyan.bold('\n✨ Obrigado por comprar na BeeCode! ✨\n'));