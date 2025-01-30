const Product = require("../models/product");

class CatalogController {
  constructor() {
    this.products = [
      new Product(1, "Processador Intel Core i9", 1500, 5, "Processadores"),
      new Product(
        2,
        "Placa de vídeo NVIDIA GeForce RTX 4090",
        8000,
        3,
        "Placas de vídeo"
      ),
      new Product(3, "Memória RAM DDR5 32GB", 1000, 10, "Memórias RAM"),
      new Product(4, "SSD NVMe 1TB", 500, 8, "Armazenamento"),
      new Product(5, "Fonte de alimentação 850W", 400, 7, "Fontes"),
      new Product(6, "Gabinete Gamer", 300, 6, "Gabinetes"),
      new Product(7, "Placa-mãe ATX", 1200, 4, "Placas-mãe"),
      new Product(8, "Cooler para processador", 200, 9, "Coolers"),
      new Product(9, "Monitor Gamer 27 polegadas", 1800, 2, "Monitores"),
      new Product(10, "Teclado mecânico", 300, 10, "Periféricos"),
      new Product(11, "Mouse gamer", 150, 10, "Periféricos"),
      new Product(12, "Processador AMD Ryzen 9", 1200, 7, "Processadores"),
      new Product(
        13,
        "Placa de vídeo AMD Radeon RX 7900 XTX",
        7500,
        4,
        "Placas de vídeo"
      ),
      new Product(14, "Memória RAM DDR5 64GB", 2000, 5, "Memórias RAM"),
      new Product(15, "SSD NVMe 2TB", 800, 6, "Armazenamento"),
      new Product(16, "Fonte de alimentação 1000W", 500, 8, "Fontes"),
      new Product(17, "Gabinete Micro-ATX", 250, 9, "Gabinetes"),
      new Product(18, "Placa-mãe Micro-ATX", 1000, 6, "Placas-mãe"),
      new Product(19, "Cooler líquido para processador", 300, 7, "Coolers"),
      new Product(20, "Monitor Gamer 32 polegadas", 2500, 3, "Monitores"),
      new Product(21, "Teclado sem fio", 200, 8, "Periféricos"),
      new Product(22, "Mouse sem fio", 100, 9, "Periféricos"),
      new Product(23, "Processador Intel Celeron", 200, 15, "Processadores"),
      new Product(24, "Placa de vídeo integrada", 100, 20, "Placas de vídeo"),
      new Product(25, "Memória RAM DDR4 8GB", 300, 12, "Memórias RAM"),
      new Product(26, "SSD SATA 256GB", 200, 10, "Armazenamento"),
      new Product(27, "Fonte de alimentação 500W", 250, 11, "Fontes"),
      new Product(28, "Gabinete Mini-ITX", 200, 10, "Gabinetes"),
      new Product(29, "Placa-mãe Mini-ITX", 800, 8, "Placas-mãe"),
      new Product(
        30,
        "Cooler para processador de baixo perfil",
        150,
        13,
        "Coolers"
      ),
      new Product(
        31,
        "Monitor para escritório 24 polegadas",
        800,
        5,
        "Monitores"
      ),
      new Product(32, "Teclado ergonômico", 400, 6, "Periféricos"),
      new Product(33, "Mouse vertical", 200, 7, "Periféricos"),
      new Product(34, "HD externo 1TB", 300, 9, "Armazenamento"),
      new Product(35, "Fones de ouvido gamer", 250, 10, "Periféricos"),
      new Product(36, "Webcam", 150, 11, "Periféricos"),
      new Product(37, "Controlador de fan", 100, 12, "Coolers"),
      new Product(38, "Cabo de força", 50, 15, "Cabos"),
      new Product(39, "Adaptador Wi-Fi", 80, 14, "Rede"),
      new Product(40, "HUB USB", 60, 13, "Periféricos"),
    ];
  }

  getProducts() {
    return this.products;
  }
  getCategories() {
    const categories = [...new Set(this.products.map((p) => p.category))];
    categories.push("Ver Todos"); // Opção para exibir todos os produtos
    return categories;
  }

  getProductsByCategory(category) {
    if (category === "Ver Todos") return this.products;
    return this.products.filter((p) => p.category === category);
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
