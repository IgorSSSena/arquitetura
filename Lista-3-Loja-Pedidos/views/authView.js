const readlineSync = require('readline-sync');
const chalk = require('chalk');
const AuthController = require('../controllers/authController');

function loginUser() {
    console.clear();
    console.log(chalk.blue.bold('\n🔒 BeeCode - Login\n'));

    while (true) {
        let username = readlineSync.question(chalk.green('👤 Usuário: '));
        let password = readlineSync.question(chalk.green('🔑 Senha: '), { hideEchoBack: true });

        if (AuthController.login(username, password)) {
            console.log(chalk.bgGreen.black('\n✅ Login bem-sucedido!\n'));
            return username;
        } else {
            console.log(chalk.bgRed.white('\n❌ Usuário ou senha incorretos! Tente novamente.\n'));
        }
    }
}

module.exports = { loginUser };