const chalk = require('chalk');
const Contato = require('../models/Contato');

class GerenciadorContatos {
  constructor() {
    this.contatos = [];
  }

  adicionarContato(contato) {
    this.contatos.push(contato);
    console.clear()
    console.log(
      `\nContato ${chalk.bold(contato.nome)} ${chalk.blue('adicionado')} com ${chalk.green('sucesso')}.`
    );  
  }

  removerContato(nome) {
    this.contatos = this.contatos.filter((contato) => contato.nome !== nome);
    console.clear()
    console.log(
      `\nContato ${chalk.bold(nome)} ${chalk.red('removido')} com ${chalk.green('sucesso')}.`
    );
  }

  listarContatos() {
    console.clear()
    console.log("Lista de Contatos:");
    this.contatos.forEach((contato, index) => {
      console.log(
        `${chalk.bold(index + 1)}. Nome: ${chalk.bold(contato.nome)}, Telefone: ${chalk.bold(contato.telefone)}, Email: ${chalk.bold(contato.email)}`
      );
    });
  }
}

module.exports = GerenciadorContatos;
