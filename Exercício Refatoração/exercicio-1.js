function calculateTotalPrice(products) {
    const getTotal = () =>
        products.reduce((sum, product) => sum + product.price * product.quantity, 0);

    const applyDiscount = (total) => (total > 100 ? total * 0.9 : total);

    const applyShippingCost = (total) => (total < 50 ? total + 5 : total);

    const finalTotal = applyShippingCost(applyDiscount(getTotal()));

    return finalTotal.toFixed(2);
}
