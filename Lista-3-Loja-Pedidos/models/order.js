class Order {
    constructor(id, username, items, total) {
        this.id = id;
        this.username = username;
        this.items = items;
        this.total = total;
        this.status = "Pendente";
    }
}

module.exports = Order;