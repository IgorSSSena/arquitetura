class ReservaVoo {
    marcarVoo(origem, destino, data) {
      console.log(`Reserva de voo de ${origem} 
        para ${destino}
        na data ${data} foi confirmada.`);
      return true;
    }
  }
  
module.exports = ReservaVoo;
