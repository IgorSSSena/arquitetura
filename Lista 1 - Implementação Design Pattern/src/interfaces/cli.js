const chalk = require('chalk');
const prompt = require("prompt-sync")();
const GerenciadorContatos = require("../controllers/GerenciadorContatos");
const BuscaPorNome = require("../strategies/BuscaPorNome");
const Contato = require("../models/Contato");

function iniciarCLI() {
  const gerenciador = new GerenciadorContatos();
  const buscaPorNome = new BuscaPorNome();

  let opcao = "";

  while (opcao !== "5") {
    console.log(chalk.bold.magenta("\nSistema de Gerenciamento de Contatos"));
    console.log("1. Adicionar Contato");
    console.log("2. Remover Contato");
    console.log("3. Listar Contatos");
    console.log("4. Buscar Contato por Nome");
    console.log("5. Sair");

    opcao = prompt("Escolha uma opção: ");
    console.log("\n");


    switch (opcao) {
      case "1":
        const nome = prompt("Nome: ");
        const telefone = prompt("Telefone: ");
        const email = prompt("Email: ");
        const novoContato = new Contato(nome, telefone, email);
        gerenciador.adicionarContato(novoContato);
        break;
      case "2":
        const nomeRemover = prompt("Nome do contato a remover: ");
        gerenciador.removerContato(nomeRemover);
        break;
      case "3":
        gerenciador.listarContatos();
        break;
      case "4":
        const nomeBuscar = prompt("Digite o nome para busca: ");
        const resultados = buscaPorNome.buscar(
          gerenciador.contatos,
          nomeBuscar
        );
        console.clear()
        console.log("\nResultados da Busca:");
        if (resultados.length === 0) {
          console.log(chalk.red("Nenhum contato encontrado."));
        } else {
          resultados.forEach((contato) =>
            console.log(
                `Nome: ${chalk.bold(contato.nome)}, Telefone: ${chalk.bold(contato.telefone)}, Email: ${chalk.bold(contato.email)}`
              )
          );
        }
        break;
      case "5":
        console.log(chalk.blue("Saindo do sistema..."));
        break;
      default:
        console.clear()
        console.log(chalk.red("Opção inválida. Tente novamente."));
    }
  }
}

module.exports = iniciarCLI;
