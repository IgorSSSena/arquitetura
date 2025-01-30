
# 📌 Documentação dos Microserviços

Este sistema modular segue uma arquitetura baseada em microserviços para gerenciar autenticação, catálogo de produtos, pedidos e pagamentos.

---

## **📊 Estrutura dos Microserviços**

Cada microserviço é responsável por uma parte específica da aplicação, facilitando a manutenção e escalabilidade.

| Microserviço      | Responsabilidade | Comunicação com |
|------------------|-----------------|-----------------|
| **Autenticação** (`authController.js`) | Gerencia usuários e login | `main.js` |
| **Catálogo** (`catalogController.js`) | Lista produtos e gerencia estoque | `orderController`, `main.js` |
| **Pedidos** (`orderController.js`) | Criação e controle de pedidos | `catalogController`, `paymentController` |
| **Pagamentos** (`paymentController.js`) | Processa pagamentos e atualiza saldo | `orderController`, `main.js` |

---

## **1️⃣ Autenticação (`authController.js`)**

📂 **Arquivo:** `controllers/authController.js`

🔹 **Descrição:** Este microserviço verifica se o usuário é válido antes de permitir interações no sistema.

🔗 **Fluxo de Comunicação:**
- `main.js → authView → authController` → Valida o usuário antes de acessar o catálogo.

📌 **Exemplo de uso:**
```js
const username = authView.loginUser(); // Chama loginUser, que usa authController
```

---

## **2️⃣ Catálogo de Produtos (`catalogController.js`)**

📂 **Arquivo:** `controllers/catalogController.js`

🔹 **Descrição:** Controla a lista de produtos e suas respectivas categorias, além de verificar o estoque disponível.

🔗 **Fluxo de Comunicação:**
- `main.js → catalogView` → Exibe os produtos disponíveis.
- `orderController` → Verifica estoque antes de processar um pedido.

📌 **Exemplo de uso:**
```js
const availableProducts = catalogController.getProducts();
```

---

## **3️⃣ Pedidos (`orderController.js`)**

📂 **Arquivo:** `controllers/orderController.js`

🔹 **Descrição:** Permite a criação e gerenciamento de pedidos pelos usuários.

🔗 **Fluxo de Comunicação:**
- `catalogController` → Verifica estoque antes de criar um pedido.
- `paymentController` → Processa o pagamento do pedido.

📌 **Exemplo de uso:**
```js
const order = orderController.createOrder(username, cart);
```

---

## **4️⃣ Pagamentos (`paymentController.js`)**

📂 **Arquivo:** `controllers/paymentController.js`

🔹 **Descrição:** Processa os pagamentos e verifica se o usuário possui saldo suficiente para a compra.

🔗 **Fluxo de Comunicação:**
- `orderController` → Verifica o total do pedido antes de processar o pagamento.

📌 **Exemplo de uso:**
```js
const paymentStatus = paymentController.processPayment(order);
```

---

## **📌 Fluxo Completo da Aplicação**

1. **Autenticação**
   - `main.js` chama `authView.loginUser()`, que valida credenciais em `authController`.

2. **Catálogo**
   - `main.js` chama `catalogView.showCategories()`, que exibe produtos de `catalogController`.

3. **Criação do Pedido**
   - `orderView.createOrder(username)` solicita produtos ao `catalogController` e cria o pedido via `orderController`.

4. **Pagamento**
   - `paymentView.processPayment(order)` chama `paymentController` para validar saldo e processar o pagamento.

5. **Finalização**
   - O sistema exibe uma mensagem de agradecimento.

---

## **📚 Conclusão**

Este sistema segue uma arquitetura modular eficiente, separando as responsabilidades entre microserviços. Isso facilita a escalabilidade e a manutenção, permitindo que novos recursos sejam adicionados sem comprometer o funcionamento geral. 🚀
