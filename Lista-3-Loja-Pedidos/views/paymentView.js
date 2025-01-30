const chalk = require('chalk');
const PaymentController = require('../controllers/paymentController');
const Table = require('cli-table3');
const CatalogController = require('../controllers/catalogController');

function processPayment(order) {
    if (!order) {
        console.log(chalk.bgRed.white("\n❌ Erro ao processar pagamento. Pedido não encontrado.\n"));
        return;
    }

    console.clear();
    console.log(chalk.blue.bold(`💳 Processando Pagamento | Saldo: R$${PaymentController.getBalance().toFixed(2)}\n`));
    console.log(chalk.yellow(` Pedido #${order.id} - Total: R$${order.total.toFixed(2)} \n`));

    const status = PaymentController.processPayment(order);

    console.log(chalk.blue.bold(`💰 Saldo Atualizado: R$${PaymentController.getBalance().toFixed(2)}\n`));

    if (status === "Pago") {
        console.log(chalk.bgGreen.black('\n ✅ Pagamento Aprovado! \n'));

        // Criando uma tabela para exibir os produtos comprados
        const orderTable = new Table({
            head: [chalk.yellow('Produto'), chalk.yellow('Quantidade'), chalk.yellow('Valor Total')],
            colWidths: [30, 15, 20],
            style: { head: ['cyan'] }
        });

        order.items.forEach(item => {
            const product = CatalogController.getProducts().find(p => p.id === item.productId);
            const totalItem = product.price * item.quantity;
            orderTable.push([product.name, item.quantity, `R$${totalItem.toFixed(2)}`]);
        });

        console.log(orderTable.toString());
        console.log(chalk.cyan.bold('\n✨ Obrigado por comprar na BeeCode! ✨\n'));

    } else {
        console.log(chalk.bgRed.white('\n ❌ Pagamento Recusado! \n'));
    }
}

module.exports = { processPayment };