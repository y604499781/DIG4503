const chalk = require("chalk");

class Person {
  constructor(name, favoriteColor) {
    this.name = name;
    this.favoriteColor = favoriteColor;
  }
  speak() {
    console.log('', chalk.yellow(this.name),'\n',
      chalk.blue(this.favoriteColor)
    );
  }
}

module.exports = Person;