const ReservaVoo = require('./reservaVoo');
const ReservaHotel = require('./reservaHotel');
const AluguelDeCarro = require('./aluguelDeCarro');

class TravelFacade {
  constructor() {
    this.marcarHotel = new ReservaHotel();
    this.marcarVoo = new ReservaVoo();
    this.carroAluguel = new AluguelDeCarro();
  }

  completarViagem(origem, destino, data, checkIn, checkOut) {
    console.log("Iniciando reserva de viagem completa...");

    const vooAgendado = this.marcarVoo.marcarVoo(origem, destino, data);  // Corrigido método para 'marcarVoo'
    const hotelAgendado = this.marcarHotel.marcarHotel(destino, checkIn, checkOut);
    const carroAlugado = this.carroAluguel.carroAluguel(destino, checkIn);

    if (vooAgendado && hotelAgendado && carroAlugado) {
      console.log("Reserva de viagem completa feita com sucesso!");
    } else {
      console.log("Falha ao reservar a viagem.");
    }
  }
}

module.exports = TravelFacade;