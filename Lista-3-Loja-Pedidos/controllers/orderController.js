const Order = require('../models/order');
const CatalogController = require('./CatalogController');

class OrderController {
    constructor() {
        this.orders = [];
    }

    createOrder(username, cart) {
        let total = 0;
        for (let item of cart) {
            if (!CatalogController.checkStock(item.productId, item.quantity)) {
                return null;
            }
            total += CatalogController.getProducts().find(p => p.id === item.productId).price * item.quantity;
        }

        const order = new Order(this.orders.length + 1, username, cart, total);
        this.orders.push(order);
        cart.forEach(item => CatalogController.updateStock(item.productId, item.quantity));

        return order;
    }
}

module.exports = new OrderController();