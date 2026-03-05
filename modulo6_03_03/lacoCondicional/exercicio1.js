const leia = require('readline-sync');

let A;
let B;
let C;
let soma;

A = leia.questionInt("Digite o número A: ");
B = leia.questionInt("Digite o número B: ");
C = leia.questionInt("Digite o número C: ");

soma = A + B;

if (soma > C) {
    console.log(`${A} + ${B} = ${soma} > ${C}`);
    console.log("A Soma de A + B é Maior do que C");
}

if (soma < C) {
    console.log(`${A} + ${B} = ${soma} < ${C}`);
    console.log("A soma de A + B é menor do que C");
}

if (soma == C) {
    console.log(`${A} + ${B} = ${soma} = ${C}`);
    console.log("A soma de A + B é igual a C");
}