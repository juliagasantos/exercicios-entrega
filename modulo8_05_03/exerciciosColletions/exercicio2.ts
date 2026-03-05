import readlinesync = require("readline-sync");

/*
Extras adicionados:
- Pergunta ao usuário se deseja continuar a busca.
- Uso de variável para verificar se o número foi encontrado.
*/

let nums = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let keepGo = true;

while (keepGo) {
    let found = false;

    let num = readlinesync.questionInt("Digite o número que você quer encontrar: ");

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === num) {
            console.log(`O número ${nums} está localizado na posição: ${i}`);
            found = true;
        }

    }

    if (!found) {
        console.log(`O número ${num} não foi encontrado.`);
    }
    let answer = readlinesync.question("Deseja continuar? (s/n):");
    if (answer.toLowerCase() === "n") {
        keepGo = false;
    }
}
