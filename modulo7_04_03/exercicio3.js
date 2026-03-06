import readlineSync from 'readline-sync';

let menor21 = 0;
let maior50 = 0;

while (true) {
    const idade = readlineSync.questionInt("Digite uma idade: ");
    if (idade < 0) break;

    if (idade < 21) menor21++;
    if (idade > 50) maior50++;
}

console.log(`Total de pessoas menores de 21 anos: ${menor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maior50}`);

/* 
Extras adicionados:
- Controle de loop infinito com break.
- Condições separadas para menores e maiores.
*/