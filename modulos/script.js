let soma = require('./soma');
let mult = require('./mult');

let args = process.argv.slice(2);

let a = parseInt(args[1]);
let b = parseInt(args[2]);

let op = args[0];
let resultado = '';


if(op == 'soma'){

    resultado = soma(a, b);

} else if (op == 'mult'){

    resultado = mult(a ,b);

} else {

    resultado = 'Valor inválido';

}

console.log(resultado);