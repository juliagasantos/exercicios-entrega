const leia = require('readline-sync');

let n1; 
let n2; 
let n3; 
let n4; 
let result;


n1 = leia.questionFloat("Digite o primeiro número: ");
n2 = leia.questionFloat("Digite o segundo número: ");
n3 = leia.questionFloat("Digite o terceiro número: ");
n4 = leia.questionFloat("Digite o quarto número: ");


result = (n1 * n2) - (n3 * n4); 

console.log("A diferença é: " + result);