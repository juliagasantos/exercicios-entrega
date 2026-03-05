const leia = require('readline-sync');

let n1; 
let n2; 
let n3; 
let n4; 
let result;


n1 = leia.questionFloat("Digite a primeira nota: ");
n2 = leia.questionFloat("Digite a segunda nota: ");
n3 = leia.questionFloat("Digite a terceira nota: ");
n4 = leia.questionFloat("Digite a quarta nota: ");


result = (n1 + n2 + n3 +n4)/4; 

console.log("A média é: " + result);