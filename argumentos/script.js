let args = process.argv.slice(2);
// 'corta os dois primeiros itens do array

let a = parseInt(args[1]);
let b = parseInt(args[2]);

let op = args[0];
let resultado = '';


function soma( x , y ){

    let r = x + y;

    return r;
}


function mult( x , y ){

    let r = x * y;

    return r;
}


if(op == 'soma'){

    resultado = soma(a, b);

} else if (op == 'mult'){

    resultado = mult(a ,b);

} else {

    resultado = 'Valor inválido';

}

console.log(resultado);