import readlineSync from 'readline-sync';


const matriz = [];
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = readlineSync.questionInt(`Digite o elemento da linha ${i + 1}, coluna ${j + 1}: `);
    }
}


let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaPrincipal = 0;
let somaSecundaria = 0;


for (let i = 0; i < 3; i++) {
    diagonalPrincipal.push(matriz[i][i]);
    diagonalSecundaria.push(matriz[i][2 - i]);
    somaPrincipal += matriz[i][i];
    somaSecundaria += matriz[i][2 - i];
}


console.log("\nElementos da Diagonal Principal:", diagonalPrincipal.join(" "));
console.log("Elementos da Diagonal Secundária:", diagonalSecundaria.join(" "));
console.log("Soma dos Elementos da Diagonal Principal:", somaPrincipal);
console.log("Soma dos Elementos da Diagonal Secundária:", somaSecundaria);