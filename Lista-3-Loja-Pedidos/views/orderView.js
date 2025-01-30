const readlineSync = require('readline-sync');
const OrderController = require('../controllers/OrderController');
const CatalogController = require('../controllers/CatalogController');
const chalk = require('chalk');
const Table = require('cli-table3');

function createOrder(username) {
    console.log(chalk.blue.bold('\n🛒 Criar um Novo Pedido\n'));

    const products = CatalogController.getProducts();

    // Exibindo os produtos disponíveis em formato de tabela
    const productTable = new Table({
        head: [chalk.yellow('ID'), chalk.yellow('Produto'), chalk.yellow('Preço (R$)'), chalk.yellow('Estoque')],
        colWidths: [5, 20, 15, 10],
        style: { head: ['cyan'] }
    });

    products.forEach(p => {
        productTable.push([p.id, p.name, `R$${p.price.toFixed(2)}`, p.stock]);
    });

    console.log(productTable.toString()); // Exibe a tabela de produtos

    let productId = readlineSync.questionInt(chalk.green('\n📥 Digite o ID do produto desejado: '));
    let quantity = readlineSync.questionInt(chalk.green('🔢 Quantidade: '));

    // Verificando se há estoque suficiente
    const selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) {
        console.log(chalk.bgRed.white('\n❌ Produto não encontrado! Selecione um ID válido.'));
        return createOrder(username);
    }

    if (quantity > selectedProduct.stock) {
        console.log(chalk.bgRed.white(`\n❌ Estoque insuficiente! Apenas ${selectedProduct.stock} unidades disponíveis.`));
        return createOrder(username);
    }

    // Criando o pedido
    const cart = [{ productId, quantity }];
    const order = OrderController.createOrder(username, cart);

    if (order) {
        console.clear();
        console.log(chalk.blue.bold('\n📜 Resumo do Pedido\n'));

        const orderTable = new Table({
            head: [chalk.yellow('Produto'), chalk.yellow('Qtd'), chalk.yellow('Preço Unitário (R$)'), chalk.yellow('Total')],
            colWidths: [20, 10, 20, 15],
            style: { head: ['cyan'] }
        });

        order.items.forEach(item => {
            const product = products.find(p => p.id === item.productId);
            const totalItem = product.price * item.quantity;
            orderTable.push([product.name, item.quantity, `R$${product.price.toFixed(2)}`, `R$${totalItem.toFixed(2)}`]);
        });

        console.log(orderTable.toString());
        console.log(chalk.green.bold(`\n💰 Total do Pedido: R$${order.total.toFixed(2)}\n`));

        return order;
    } else {
        console.log(chalk.bgRed.white(' ❌ Erro ao processar o pedido. Tente novamente. '));
        return createOrder(username);
    }
}

module.exports = { createOrder };