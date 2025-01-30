const readlineSync = require('readline-sync');
const OrderController = require('../controllers/orderController');
const CatalogController = require('../controllers/catalogController');
const PaymentController = require('../controllers/paymentController');
const chalk = require('chalk');
const Table = require('cli-table3');
const CatalogView = require('./catalogView');

function createOrder(username) {
    console.clear();
    console.log(chalk.blue.bold(`🛒 Criar um Novo Pedido | Saldo: R$${PaymentController.getBalance().toFixed(2)}\n`));

    CatalogView.showCategories();

    let productId = readlineSync.questionInt(chalk.green('\n📥 Digite o ID do produto desejado: '));
    let quantity = readlineSync.questionInt(chalk.green('🔢 Quantidade: '));

    const selectedProduct = CatalogController.getProducts().find(p => p.id === productId);
    if (!selectedProduct) {
        console.log(chalk.bgRed.white("\n❌ Produto não encontrado! Selecione um ID válido."));
        return createOrder(username);
    }

    if (quantity > selectedProduct.stock) {
        console.log(chalk.bgRed.white(`\n❌ Estoque insuficiente! Apenas ${selectedProduct.stock} unidades disponíveis.`));
        readlineSync.question(chalk.green("\nPressione Enter para voltar..."));
        return createOrder(username);
    }

    const cart = [{ productId, quantity }];
    const order = OrderController.createOrder(username, cart);

    if (!order) {
        console.log(chalk.bgRed.white('\n❌ Erro ao processar o pedido. Tente novamente.'));
        return createOrder(username);
    }

    return order;
}

module.exports = { createOrder };