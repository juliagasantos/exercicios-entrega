import readlinesync = require("readline-sync");

/*
Extras adicionados:
- Pergunta ao final: "Deseja procurar outro número? (S/N)".
- Conversão da resposta para maiúscula, evitando problemas com s/S ou n/N.
- Mensagem de encerramento clara: "Programa finalizado. Até mais!".
- Exibição do Set de forma legível usando Array.from().
*/

let numeros = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

console.log("Números no Set:", Array.from(numeros).join(", "));

let continuar = true;

while (continuar) {
    let numeroUsuario = readlinesync.questionInt("Digite o número que você deseja encontrar: ");

    if (numeros.has(numeroUsuario)) {
        console.log(`O número ${numeroUsuario} foi encontrado!`);
    } else {
        console.log(`O número ${numeroUsuario} não foi encontrado!`);
    }

    let resposta = readlinesync.question("Deseja procurar outro número? (S/N): ").toUpperCase();

    if (resposta !== "S") {
        continuar = false;
        console.log("Programa finalizado. Até mais!");
    }
}