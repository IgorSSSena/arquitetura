const Order = require('../models/order');
const CatalogController = require('./catalogController');

class OrderController {
    constructor() {
        this.orders = [];
    }

    createOrder(username, cart) {
        let total = 0;
        for (let item of cart) {
            const product = CatalogController.getProducts().find(p => p.id === item.productId);
            if (!product || product.stock < item.quantity) {
                return null;
            }
            total += product.price * item.quantity;
        }

        // Criar o pedido se o estoque estiver disponível
        const order = new Order(this.orders.length + 1, username, cart, total);
        this.orders.push(order);

        // Atualizar estoque
        cart.forEach(item => {
            const product = CatalogController.getProducts().find(p => p.id === item.productId);
            product.stock -= item.quantity;
        });

        return order;
    }
}

module.exports = new OrderController();