import readlineSync from 'readline-sync';

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    const numero = readlineSync.questionInt(`Digite o ${i}º número: `);
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Total de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);

/* 
Extras adicionados:
- Loop flexível de 10 números.
- Contagem separada de pares e ímpares.
*/