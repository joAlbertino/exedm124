const chalk = require('chalk');
const string = require('useful-string');

const names = [
 "Felipe Godinho de Almeida",
 "Francine de Fátima Braga",
 "Gerson Lourenço de Carvalho",
 "Pereira da Conceição"
];

const print = name => names.indexOf(name) % 2 ==0 ? console.log(chalk.blue(name)) : console.log(chalk.yellow(name));


names
  .forEach(print);
