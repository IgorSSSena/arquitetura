const Turma = require('./Turma');

class TurmaPresencial extends Turma {
  constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.frequencia = frequencia;
  }

  aprovado() {
    return super.aprovado() && this.frequencia >= 75; // Aprovado se a nota for >=6 e a frequência for >=75%
  }
}

module.exports = TurmaPresencial;