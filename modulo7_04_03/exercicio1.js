import readlineSync from 'readline-sync';

const primeiro = readlineSync.questionInt("Digite o primeiro número do intervalo: ");
const segundo = readlineSync.questionInt("Digite o último número do intervalo: ");

if (primeiro >= segundo) {
    console.log("Intervalo inválido!");
} else {
    console.log(`No Intervalo entre ${primeiro} e ${segundo}:`);
    let count = 0;
    for (let i = primeiro; i <= segundo; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é múltiplo de 3 e 5`);
            count++;
        }
    }
    console.log(`Total de números múltiplos de 3 e 5: ${count}`);
}

/* 
Extras adicionados:
- Contador de múltiplos encontrado.
- Mensagem final mostrando total.
*/