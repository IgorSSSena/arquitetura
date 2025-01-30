const chalk = require('chalk');

class PaymentController {
    processPayment(order) {
        console.log(chalk.blue.bold('\n💳 Processando pagamento...\n'));

        const isPaymentSuccessful = Math.random() > 0.3; // 70% de chance de sucesso
        order.status = isPaymentSuccessful ? "Pago" : "Recusado";

        if (isPaymentSuccessful) {
            console.log(chalk.bgGreen.black(` ✅ Pagamento do Pedido #${order.id} APROVADO! `));
        } else {
            console.log(chalk.bgRed.white(` ❌ Pagamento do Pedido #${order.id} RECUSADO! `));
        }

        return order.status;
    }
}

module.exports = new PaymentController();