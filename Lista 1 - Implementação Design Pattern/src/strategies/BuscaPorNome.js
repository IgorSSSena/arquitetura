const BuscaStrategy = require("./BuscaStrategy");

class BuscaPorNome extends BuscaStrategy {
  buscar(contatos, nome) {
    return contatos.filter((contato) =>
      contato.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }
}

module.exports = BuscaPorNome;