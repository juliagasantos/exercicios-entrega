import readlineSync from 'readline-sync';

const vetor = [2,5,1,3,4,9,7,8,10,6];
let continuarBusca = "S";

while (continuarBusca === "S") {
    const num = readlineSync.questionInt("Digite o número que deseja encontrar: ");
    let encontrado = false;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === num) {
            console.log(`Número ${num} está na posição ${i}`);
            encontrado = true;
            break;
        }
    }
    if (!encontrado) console.log(`Número ${num} não foi encontrado!`);

    continuarBusca = readlineSync.question("Deseja buscar outro número? (S/N): ").toUpperCase();
}

/* 
Extras adicionados:
- Permite múltiplas buscas.
- Uso de variável encontrado.
*/