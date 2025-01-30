class Payment {
    constructor(orderId, status) {
        this.orderId = orderId;
        this.status = status; // "Pago" ou "Recusado"
        this.timestamp = new Date(); // Registra a data e hora do pagamento
    }
}

module.exports = Payment;