class EmployeeComponent {
    constructor(nome) {
      if (this.constructor === EmployeeComponent) {
        throw new Error("EmployeeComponent é uma classe abstrata e não pode ser instanciada diretamente.");
      }
      this.nome = nome;
    }
  
    getSalario() {
      throw new Error("Método 'getSalario()' deve ser implementado.");
    }
  
    adicionar(componente) {
      throw new Error("Método 'adicionar()' não implementado em EmployeeComponent.");
    }
  
    remover(componente) {
      throw new Error("Método 'remover()' não implementado em EmployeeComponent.");
    }
  
    getSalarioTotal() {
      return this.getSalario();
    }
  }
      class Employee extends EmployeeComponent {
    constructor(nome, salario) {
      super(nome);
      this.salario = salario;
    }
  
      getSalario() {
      return this.salario;
    }
  }
     class Department extends EmployeeComponent {
    constructor(nome) {
      super(nome);
      this.componentes = [];
    }
  
    adicionar(componente) {
      this.componentes.push(componente);
    }
  
      remover(componente) {
      this.componentes = this.componentes.filter(c => c !== componente);
    }
  
    getSalario() {
        return this.componentes.reduce((total, componente) => total + componente.getSalarioTotal(), 0);
    }
  }
  
 
  const emp1 = new Employee("Igor", 5000);
  const emp2 = new Employee("Davi", 6000);
const devDept = new Department("Desenvolvimento");
  devDept.adicionar(emp1);
  devDept.adicionar(emp2);
  
  const emp3 = new Employee("Victor Hugo", 7000);
  const emp4 = new Employee("Nicky", 8000);
  const researchDept = new Department("Pesquisa");
  researchDept.adicionar(emp3);
  researchDept.adicionar(emp4);
  
  const company = new Department("Empresa");
  company.adicionar(devDept);
  company.adicionar(researchDept);
  console.log(`Salário total da organização: R$${company.getSalario()}`);
  