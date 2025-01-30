const readlineSync = require('readline-sync');
const CatalogController = require('../controllers/catalogController');
const PaymentController = require('../controllers/paymentController');
const chalk = require('chalk');
const Table = require('cli-table3');

function showCategories() {
    while (true) {
        console.clear();
        console.log(chalk.blue.bold(`📦 BeeCode - Sua Loja de Eletrônicos | Saldo: R$${PaymentController.getBalance().toFixed(2)}\n`));

        const categories = CatalogController.getCategories();
        categories.forEach((category, index) => {
            console.log(`${index + 1}. ${chalk.yellow(category)}`);
        });

        let choice = readlineSync.questionInt(chalk.green('\nDigite o número da categoria desejada: '));

        if (choice >= 1 && choice <= categories.length) {
            return showProducts(categories[choice - 1]);
        } else {
            console.log(chalk.bgRed.white("\n❌ Escolha inválida! Tente novamente.\n"));
        }
    }
}

function showProducts(selectedCategory) {
    console.clear();
    console.log(chalk.blue.bold(`📦 BeeCode - ${selectedCategory} | Saldo: R$${PaymentController.getBalance().toFixed(2)}\n`));

    const products = CatalogController.getProductsByCategory(selectedCategory);
    if (products.length === 0) {
        console.log(chalk.bgRed.white("\n❌ Nenhum produto encontrado nesta categoria.\n"));
        readlineSync.question(chalk.green("\nPressione Enter para voltar..."));
        return showCategories();
    }

    const table = new Table({
        head: [chalk.yellow('ID'), chalk.yellow('Produto'), chalk.yellow('Preço (R$)'), chalk.yellow('Estoque')],
        colWidths: [5, 30, 15, 10],
        style: { head: ['cyan'] }
    });

    products.forEach(p => {
        table.push([p.id, p.name, `R$${p.price.toFixed(2)}`, p.stock]);
    });

    console.log(table.toString());
}

module.exports = { showCategories, showProducts };