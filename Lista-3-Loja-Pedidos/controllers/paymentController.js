const chalk = require('chalk');
const Payment = require('../models/payment');

class PaymentController {
    constructor() {
        this.userBalance = 10000;
    }

    getBalance() {
        return this.userBalance;
    }

    processPayment(order) {
        console.log(chalk.blue.bold(`\n💳 Processando pagamento | Saldo: R$${this.userBalance.toFixed(2)}\n`));

        if (order.total > this.userBalance) {
            console.log(chalk.bgRed.white(`❌ Saldo insuficiente! Seu saldo atual: R$${this.userBalance.toFixed(2)}`));
            return "Saldo Insuficiente";
        }

        this.userBalance -= order.total;
        console.log(chalk.bgGreen.black(`✅ Pagamento do Pedido #${order.id} Aprovado!`));
        console.log(chalk.green(`💰 Saldo restante: R$${this.userBalance.toFixed(2)}`));

        return "Pago";
    }
}

module.exports = new PaymentController();