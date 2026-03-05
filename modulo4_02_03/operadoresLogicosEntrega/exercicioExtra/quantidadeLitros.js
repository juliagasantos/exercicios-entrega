//calcular a quantidade de litros através do preço do combustível e o valor gasto

const leia = require('readline-sync');

let valorCombustivel;
let valorGasto;
let qLitros;

valorCombustivel = leia.questionFloat("Digite o valor do combustível: ");
valorGasto = leia.questionFloat("Digite o valor gasto: ");


qLitros = valorGasto/valorCombustivel;

console.log(`A quantidade de litros é: ${qLitros}`);