const User = require("../models/user");

class AuthController {
  constructor() {
    this.users = [
      new User("igor", "sena"),
      new User("davi", "santana"),
      new User("victor", "tlaes"),
    ];
  }

  login(username, password) {
    return this.users.some(
      (u) => u.username === username && u.password === password
    );
  }
}

module.exports = new AuthController();
