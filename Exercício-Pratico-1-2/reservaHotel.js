class ReservaHotel {
    marcarHotel(cidade, checkIn, checkOut) {
      console.log(`Reserva de hotel em ${cidade} 
        do dia ${checkIn}
        até ${checkOut} foi confirmada.`);
      return true;
    }
  }

  module.exports = ReservaHotel;
