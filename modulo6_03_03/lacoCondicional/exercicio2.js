const leia = require('readline-sync');

let numero;

numero = leia.questionInt("Digite um número: ");

if (numero % 2 == 0 && numero >= 0) {
    console.log(`O número ${numero} é par e positivo!`);
}

if (numero % 2 != 0 && numero >= 0) {
    console.log(`O número ${numero} é ímpar e positivo!`);
}

if (numero % 2 == 0 && numero < 0) {
    console.log(`O número ${numero} é par e negativo!`);
}

if (numero % 2 != 0 && numero < 0) {
    console.log(`O número ${numero} é ímpar e negativo!`);
}