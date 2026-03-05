const leia = require('readline-sync');

let salario; 
let abono;
let novoSalario;

salario = leia.questionFloat("Digite seu salário: ");
abono = leia.questionFloat("Digite o abono: "); 

novoSalario = salario + abono; 

console.log(`O novo salário é: ${novoSalario}`);