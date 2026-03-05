import readlinesync = require("readline-sync");

/*
Observação:
- Não foi feita a ordenação em ordem decrescente porque a estrutura Set
não possui ordenação automática. Para isso seria necessário converter
o Set para Array e depois ordenar. (Não fiz pois não tinha certeza se podia.)
*/

let nums = new Set<number>();

for (let i = 0; i < 10; i++) {
    let num = readlinesync.questionInt("Digite um número: ");

    if(nums.has(num)){
        console.log("Número repetido! Digite outro: ")
        i--;
    }else{
       nums.add(num); 
    }
    
}

console.log("Listar dados do set:")
for(let num of nums){
    console.log(num);
}