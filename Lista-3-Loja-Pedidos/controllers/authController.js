const User = require("../models/user");

class AuthController {
  constructor() {
    this.users = [
      new User("igor", "sena"),
      new User("davi", "santana"),
      new User("victor", "tlaes"),
      new User("professor", "arquitetura"),

    ];
  }

  login(username, password) {
    return this.users.some(
      (user) => user.username === username && user.password === password
    );
  }
}

module.exports = new AuthController();
