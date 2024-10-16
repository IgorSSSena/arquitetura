import Aluno from './aluno';
import TurmaPresencial from './turmaPresencial';

// Criando um aluno
const aluno = new Aluno('João', 'joao123', '123456');

// Criando uma turma presencial
const turmaPresencial = new TurmaPresencial('MAT101', 8, 80);

console.log(`O aluno ${aluno.nome} foi aprovado? ${turmaPresencial.aprovado()}`);