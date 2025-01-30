const chalk = require('chalk');
const PaymentController = require('../controllers/PaymentController');

function processPayment(order) {
    console.clear();
    console.log(chalk.blue.bold('\n💳 Processando Pagamento\n'));

    console.log(chalk.yellow(` Pedido #${order.name} - Total: R$${order.total.toFixed(2)} `));
    
    const status = PaymentController.processPayment(order);
    
    if (status === "Pago") {
        console.log(chalk.bgGreen.black('\n ✅ Pagamento Aprovado! '));
    } else {
        console.log(chalk.bgRed.white('\n ❌ Pagamento Recusado! '));
    }
}

module.exports = { processPayment };