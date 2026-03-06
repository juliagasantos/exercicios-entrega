import readlineSync from 'readline-sync';

const vetor = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
    vetor[i] = readlineSync.questionInt(`Digite o ${i+1}º número: `);
    soma += vetor[i];
}

console.log("Números ímpares:");
for (let i = 0; i < 10; i++) {
    if (vetor[i] % 2 !== 0) console.log(vetor[i]);
}

console.log("Elementos pares:");
for (let i = 0; i < 10; i++) if (vetor[i] % 2 === 0) console.log(vetor[i]);

console.log(`Soma: ${soma}`);
console.log(`Média: ${(soma / vetor.length).toFixed(2)}`);

/* 
Extras adicionados:
- Cálculo da soma e média.
- Impressão separada de índices ímpares e pares.
*/