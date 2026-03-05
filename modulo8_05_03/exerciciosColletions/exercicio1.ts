import readlinesync = require("readline-sync");


/*
Extras adicionados:
- Primeira letra da cor em maiúscula.
- Verificação para não repetir cores.
*/


//array: lista de vetores
let colors: string[] = [];
let color: string;

for (let i = 0; i < 5; i++) {
    color = readlinesync.question("Digite o nome da cor: ");
    color = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();

    while (colors.includes(color)){
        console.log("Essa cor já foi digitada, tente outra! :)");

        color = readlinesync.question("Digite uma cor: ")
        color = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
    }

    colors.push(color);
};


console.log("\nListar todas as cores:")
// console.table(colors)
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
colors.sort();


console.log("\nOrdenar as cores:");
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}