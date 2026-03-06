import readlineSync from 'readline-sync';

let soma = 0;
let numero;

do {
    numero = readlineSync.questionInt("Digite um número: ");
    if (numero > 0) soma += numero;
    else if (numero < 0) console.log("Número negativo não será somado.");
} while (numero !== 0);

console.log(`Soma dos números positivos: ${soma}`);

/* 
Extras adicionados:
- Mensagem para números negativos.
- Garantia de execução mínima com do…while.
*/