# Explicação do Código para Estrutura Organizacional usando o Padrão Composite

Neste trabalho, foi desenvolvido um sistema que representa a estrutura hierárquica de uma organização usando o padrão de design Composite. Esse padrão permite que cada elemento da organização seja representado de forma uniforme, seja um funcionário individual ou um departamento. Abaixo, segue a explicação detalhada das principais classes e métodos implementados.

## Classe `EmployeeComponent`

A classe `EmployeeComponent` é a base para todos os componentes da nossa estrutura organizacional, funcionando como uma classe abstrata. Ela define uma interface comum para todos os tipos de componentes, sejam eles funcionários (`Employee`) ou departamentos (`Department`).

Os métodos definidos nessa classe são:
- **`getSalary()`**: Responsável por retornar o salário do componente, seja ele um funcionário ou o total dos salários em um departamento. Esse método precisa ser implementado nas subclasses, pois cada tipo de componente calculará o salário de forma diferente.
- **`add(component)` e `remove(component)`**: Esses métodos permitem adicionar ou remover componentes. Contudo, eles fazem sentido apenas para a classe `Department`, que é composta por outros componentes.
- **`getTotalSalary()`**: Método que retorna o salário total de um componente. Ele chama `getSalary()` e, em componentes compostos (como `Department`), calcula o total somando os salários de todos os elementos que o compõem.

## Classe `Employee` (Folha)

A classe `Employee` representa um funcionário individual, ou seja, um elemento que não possui componentes filhos.

Principais características:
- **Atributos**: `name` e `salary` representam o nome e o salário do funcionário, respectivamente.
- **Método `getSalary()`**: Implementado para retornar o salário do funcionário.
- **Métodos `add` e `remove`**: Não são implementados aqui, pois um `Employee` é uma folha, ou seja, um componente final que não contém outros elementos.

## Classe `Department` (Composite)

A classe `Department` é um exemplo de um objeto "composto", que pode conter outros `EmployeeComponent`, como funcionários (`Employee`) ou subdepartamentos (outros `Department`). Ela permite criar uma estrutura de árvore hierárquica.

Principais características:
- **Atributo `components`**: Lista que armazena os componentes do departamento, que podem ser tanto funcionários quanto outros subdepartamentos.
- **Métodos `add(component)` e `remove(component)`**: Implementados para adicionar ou remover componentes na lista `components`.
- **Método `getSalary()`**: Calcula o salário total de todos os componentes dentro do departamento, incluindo subdepartamentos. Isso é feito somando recursivamente o salário de cada componente contido no departamento.

## Exemplo de Uso

No exemplo prático, foram criados alguns funcionários (`Employee`) e departamentos (`Department`), e então foi formada uma estrutura hierárquica:

1. Foram instanciados funcionários individuais, como "Alice" e "Bob", e adicionados ao departamento de desenvolvimento (`devDept`).
2. Foram criados mais funcionários e um departamento de pesquisa (`researchDept`), no qual esses novos funcionários foram adicionados.
3. Finalmente, foi criado o departamento principal da organização (`company`), onde os departamentos de desenvolvimento e pesquisa foram adicionados, formando a estrutura completa da organização.

## Cálculo do Salário Total

Para calcular o salário total da organização, foi chamado o método `getSalary()` no nível mais alto da hierarquia, que neste caso é o departamento `company`. Este método percorre recursivamente a estrutura, somando os salários dos funcionários em todos os departamentos e subdepartamentos.

## Saída Esperada

Ao executar o código, a saída esperada é:
## Salário total da organização: R$26000











