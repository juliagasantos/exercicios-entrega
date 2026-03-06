import readlineSync from 'readline-sync';

let soma = 0;
let count = 0;
let numero;

do {
    numero = readlineSync.questionInt("Digite um número: ");
    if (numero % 3 === 0 && numero !== 0) {
        soma += numero;
        count++;
    }
} while (numero !== 0);

const media = count > 0 ? soma / count : 0;
console.log(`Média dos números múltiplos de 3: ${media.toFixed(2)}`);

/* 
Extras adicionados:
- Contador de múltiplos.
- Tratamento caso não haja múltiplos.
*/