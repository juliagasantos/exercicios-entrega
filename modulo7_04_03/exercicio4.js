import readlineSync from 'readline-sync';


let totalPessoas = 0;
let somaIdades = 0;
let backend = 0;
let frontendMulheres = 0;
let mobileHomens40 = 0;
let fullstackNaoBinarios30 = 0;

let continuar = 'S';

while (continuar.toUpperCase() === 'S') {
    const idade = readlineSync.questionInt("Digite a idade: ");

    console.log("\nIdentidade de Gênero:\n1 – Mulher Cis\n2 – Homem Cis\n3 – Não Binário\n4 – Mulher Trans\n5 – Homem Trans\n6 – Outros");
    const genero = readlineSync.questionInt("Digite a identidade de gênero (1-6): ");

    console.log("\nPessoa Desenvolvedora:\n1 – Backend\n2 – Frontend\n3 – Mobile\n4 – FullStack");
    const tipoDev = readlineSync.questionInt("Digite o tipo de pessoa desenvolvedora (1-4): ");

    totalPessoas++;
    somaIdades += idade;

    if (tipoDev === 1) backend++;
    if (tipoDev === 2 && (genero === 1 || genero === 4)) frontendMulheres++;
    if (tipoDev === 3 && (genero === 2 || genero === 5) && idade > 40) mobileHomens40++;
    if (tipoDev === 4 && genero === 3 && idade < 30) fullstackNaoBinarios30++;


    continuar = readlineSync.question("Deseja continuar a leitura dos dados? (S/N): ");
}


console.log("\n--- Resultados da Pesquisa ---");
console.log(`Número de pessoas desenvolvedoras Backend: ${backend}`);
console.log(`Número de Mulheres Cis e Trans desenvolvedoras Frontend: ${frontendMulheres}`);
console.log(`Número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${mobileHomens40}`);
console.log(`Número de Não Binários desenvolvedores FullStack menores de 30 anos: ${fullstackNaoBinarios30}`);
console.log(`Número total de pessoas que responderam à pesquisa: ${totalPessoas}`);
console.log(`Média de idade das pessoas que responderam à pesquisa: ${(somaIdades / totalPessoas).toFixed(2)}`);