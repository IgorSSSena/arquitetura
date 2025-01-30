const CatalogController = require('../controllers/CatalogController');
const chalk = require('chalk');
const Table = require('cli-table3');

function showProducts() {
    console.clear();
    console.log(chalk.blue.bold('\n📦 Catálogo de Produtos\n'));

    const products = CatalogController.getProducts();

    // Criando a tabela
    const table = new Table({
        head: [chalk.yellow('ID'), chalk.yellow('Produto'), chalk.yellow('Preço (R$)'), chalk.yellow('Estoque')],
        colWidths: [5, 20, 15, 10],
        style: { head: ['cyan'] }
    });

    // Adicionando os produtos na tabela
    products.forEach(p => {
        table.push([p.id, p.name, `R$${p.price.toFixed(2)}`, p.stock]);
    });

    console.log(table.toString()); // Exibe a tabela no terminal
}

module.exports = { showProducts };