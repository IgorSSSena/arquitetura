
# Alunos
- Davi Silva Santana - RA:2411350
- Igor Silva Sena    - RA:2418274

# Sistema de Gerenciamento de Contatos

Este é um sistema de gerenciamento de contatos desenvolvido em JavaScript, utilizando padrões de projeto estruturais e comportamentais para garantir modularidade, extensibilidade e boas práticas de programação.

## Objetivo

O sistema permite aos usuários adicionar, remover, listar e buscar contatos por nome. Ele utiliza uma interface de linha de comando (CLI) para interagir com o usuário.

## Estrutura do Projeto

- **`index.js`**: Arquivo principal para inicialização.
- **`src/models/Contato.js`**: Modelo que define a estrutura de um contato.
- **`src/controllers/GerenciadorContatos.js`**: Controlador que gerencia a lista de contatos.
- **`src/interfaces/cli.js`**: Interface CLI para interação com o sistema.
- **`src/strategies/BuscaStrategy.js`**: Classe base para o padrão Strategy.
- **`src/strategies/BuscaPorNome.js`**: Implementação do padrão Strategy para busca de contatos por nome.

## Funcionamento

1. **Adicionar Contatos**:
   - O usuário insere o nome, telefone e email.
   - O contato é salvo na lista de contatos.

2. **Remover Contatos**:
   - O usuário informa o nome do contato a ser removido.
   - O sistema filtra a lista e remove o contato correspondente.

3. **Listar Contatos**:
   - Exibe todos os contatos cadastrados, com nome, telefone e email.

4. **Buscar Contatos por Nome**:
   - Implementado usando o padrão de projeto **Strategy**.
   - O algoritmo de busca verifica se o nome informado contém parte ou todo o nome dos contatos cadastrados.

## Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar o sistema**:
   ```bash
   node src/interfaces/cli.js
   ```

## Dependências Utilizadas

- **`chalk`**: Para estilizar saídas no terminal.
- **`prompt-sync`**: Para receber entradas do usuário no terminal.

## Estrutura do Código

### `Contato.js`
Define o modelo de um contato:
```javascript
class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

module.exports = Contato;
```

### `GerenciadorContatos.js`
Gerencia as operações sobre os contatos:
```javascript
class GerenciadorContatos {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) { ... }
    removerContato(nome) { ... }
    listarContatos() { ... }
}
```

### `BuscaStrategy.js`
Define a interface para estratégias de busca:
```javascript
class BuscaStrategy {
    buscar(contatos, criterio) {
        throw new Error("Método 'buscar' deve ser implementado.");
    }
}
```

### `BuscaPorNome.js`
Implementa a busca por nome:
```javascript
class BuscaPorNome extends BuscaStrategy {
    buscar(contatos, nome) {
        return contatos.filter((contato) => 
            contato.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }
}
```

### `cli.js`
Interface de linha de comando:
```javascript
function iniciarCLI() {
    const gerenciador = new GerenciadorContatos();
    const buscaPorNome = new BuscaPorNome();
    ...
}
```



## Padrões de Projeto Utilizados

### **Padrão Strategy**
**Motivo da escolha**: 
O padrão **Strategy** foi utilizado para implementar a funcionalidade de busca de contatos. Ele permite que diferentes algoritmos de busca sejam definidos de forma independente e utilizados de maneira intercambiável. 

No projeto:
- A classe base `BuscaStrategy` define uma interface comum para todas as estratégias de busca.
- A classe concreta `BuscaPorNome` implementa uma busca específica por nome.

**Vantagens**:
- **Flexibilidade**: Permite adicionar novos algoritmos de busca no futuro sem modificar o código existente.
- **Modularidade**: Cada estratégia de busca é isolada em sua própria classe, facilitando a manutenção.
- **Extensibilidade**: Caso seja necessário implementar novas buscas, como por telefone ou email, isso pode ser feito sem alterar o restante do sistema.

**Exemplo prático**:
Se quisermos implementar uma busca por telefone, basta criar uma nova classe `BuscaPorTelefone` que estenda `BuscaStrategy` e fornecer o algoritmo correspondente, sem tocar nas outras partes do código.

---

### **Padrão Composite**
**Motivo da escolha**:
O gerenciador de contatos (`GerenciadorContatos`) atua como um "agregador" de objetos do tipo `Contato`, permitindo gerenciar múltiplos contatos de forma uniforme.

-No projeto:
- O `GerenciadorContatos` mantém uma lista de contatos (`this.contatos`), tratando-os como uma única coleção.
- As operações como adicionar, remover e listar contatos são realizadas de forma transparente na coleção.

**Vantagens**:
- **Organização de hierarquias**: Facilita a manipulação de coleções de objetos como se fossem um único objeto.
- **Simplicidade**: O cliente (usuário final) não precisa saber como os contatos estão organizados internamente.

**Relevância futura**:
Se quisermos estender o sistema para gerenciar grupos de contatos ou criar subgrupos (por exemplo, "Amigos", "Família"), o padrão Composite pode ser aplicado diretamente, integrando hierarquias de objetos de maneira natural.

---

Essa abordagem com **Strategy** e **Composite** garante um sistema robusto, escalável e fácil de manter, atendendo aos requisitos do projeto e oferecendo flexibilidade para futuras expansões.


## Conclusão

Este sistema demonstra a aplicação prática de padrões de projeto em JavaScript, garantindo que o código seja organizado, extensível e fácil de manter.


---