const readlineSync = require('readline-sync');
const chalk = require('chalk');
const AuthController = require('../controllers/AuthController');

function loginUser() {
    console.clear();
    console.log(chalk.blue.bold('\nSistema de Login\n'));
    
    let username = readlineSync.question(chalk.green('👤 Usuário: '));
    let password = readlineSync.question(chalk.green('🔑 Senha: '), { hideEchoBack: true });

    if (AuthController.login(username, password)) {
        console.log(chalk.bgGreen.black(' ✅ Login bem-sucedido! '));
        return username;
    } else {
        console.log(chalk.bgRed.white(' ❌ Falha no login. Tente novamente. '));
        return loginUser();
    }
}

module.exports = { loginUser };