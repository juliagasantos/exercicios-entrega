import readlineSync from 'readline-sync';


const matriz = [];
const medias = [];

for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    let soma = 0;

    console.log(`\nAluno ${i + 1}:`);

    for (let j = 0; j < 4; j++) {
        let nota;
        // Loop para garantir que o usuário digite um número válido
        while (true) {
            nota = readlineSync.questionFloat(`  Nota do ${j + 1}º bimestre: `);
            if (nota >= 0 && nota <= 10) break;
            console.log("    Entrada inválida! Digite um número entre 0 e 10.");
        }

        matriz[i][j] = nota;
        soma += nota;
    }

    medias[i] = soma / 4;
}

// Exibir médias
console.log("\nMédias dos alunos:");
for (let i = 0; i < 10; i++) {
    console.log(`Aluno ${i + 1}: ${medias[i].toFixed(1)}`);
}