const readline = require('readline');
const TravelFacede = require('./TravelFacede');

// Criar a interface readline para capturar a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const travelFacede = new TravelFacede();
rl.question("Digite a cidade de origem: ", (origem) => {
  rl.question("Digite a cidade de destino: ", (destino) => {
    rl.question("Digite a data da viagem (YYYY-MM-DD): ", (data) => {
      rl.question("Digite a data de check-in (YYYY-MM-DD): ", (checkIn) => {
        rl.question("Digite a data de check-out (YYYY-MM-DD): ", (checkOut) => {
          travelFacede.completarViagem(origem, destino, data, checkIn, checkOut);

          rl.close();
        });
      });
    });
  });
});
