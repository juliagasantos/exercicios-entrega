const leia = require('readline-sync');

let salarioBruto; 
let adicionalNoturno; 
let horasExtras; 
let descontos; 
let result;


salarioBruto = leia.questionFloat("Digite o salário bruto: ");
adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ");
horasExtras = leia.questionFloat("Digite as horas extras: ");
descontos = leia.questionFloat("Digite o desconto: ");


result = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos; 
console.log(`Salário líquido: ${result}`);