const Product = require("../models/product");

class CatalogController {
  constructor() {
    this.products = [
        new Product(1, "Processador Intel Core i9", 1500, 5, "Processadores"),
        new Product(2, "Placa de vídeo NVIDIA GeForce RTX 4090", 8000, 3, "Placas de vídeo"),
        new Product(3, "Memória RAM DDR5 32GB", 1000, 10, "Memórias RAM"),
        new Product(4, "SSD NVMe 1TB", 500, 8, "Armazenamento"),
        new Product(5, "Fonte de alimentação 850W", 400, 7, "Fontes"),
        new Product(6, "Gabinete Gamer", 300, 6, "Gabinetes"),
        new Product(7, "Placa-mãe ATX", 1200, 4, "Placas-mãe"),
        new Product(8, "Cooler para processador", 200, 9, "Coolers"),
        new Product(9, "Monitor Gamer 27 polegadas", 1800, 2, "Monitores"),
        new Product(10, "Teclado mecânico", 300, 10, "Periféricos"),
        new Product(11, "Mouse gamer", 150, 10, "Periféricos"),
      ];
  }

  getProducts() {
    return this.products;
  }

  checkStock(productId, quantity) {
    const product = this.products.find((p) => p.id === productId);
    return product && product.stock >= quantity;
  }

  updateStock(productId, quantity) {
    const product = this.products.find((p) => p.id === productId);
    if (product) product.stock -= quantity;
  }
}

module.exports = new CatalogController();
