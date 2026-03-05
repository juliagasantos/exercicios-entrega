const leia = require('readline-sync');

let nome;
let idade;
let primeiraDoacao;

nome = leia.question("Digite o nome do doador: ");
idade = leia.questionInt("Digite a idade do doador: ");
primeiraDoacao = leia.question("Primeira doação de sangue? (true/false): ");

if (idade >= 18 && idade <= 59) {
    console.log(`${nome} está apto para doar sangue!`);
}
else if (idade >= 60 && idade <= 69 && primeiraDoacao == "false") {
    console.log(`${nome} está apto para doar sangue!`);
}
else {
    console.log(`${nome} não está apto para doar sangue!`);
}