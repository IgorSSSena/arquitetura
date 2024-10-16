class Turma {
    constructor(codigo, nota) {
      this.codigo = codigo;
      this.nota = nota;
    }
  
    aprovado() {
      return this.nota >= 6; // Considera aprovado se a nota for igual ou maior que 6
    }
  }
  
  module.exports = Turma;