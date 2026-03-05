const leia = require('readline-sync');

let tipo1;
let tipo2;
let tipo3;

//uso extra do while
while (true) {
    tipo1 = leia.question("Digite a primeira característica (vertebrado/invertebrado): ");
    
    if (tipo1 == "vertebrado" || tipo1 == "invertebrado") {
        break;
    } else {
        console.log("Valor inválido! Digite apenas: vertebrado ou invertebrado.\n");
    }
}

while (true) {
    if (tipo1 == "vertebrado") {
        tipo2 = leia.question("Digite a segunda característica (ave/mamifero): ");
        
        if (tipo2 == "ave" || tipo2 == "mamifero") {
            break;
        }
    } 
    else {
        tipo2 = leia.question("Digite a segunda característica (inseto/anelideo): ");
        
        if (tipo2 == "inseto" || tipo2 == "anelideo") {
            break;
        }
    }

    console.log("Valor inválido! Digite uma opção válida.\n");
}

while (true) {

    if (tipo2 == "ave") {
        tipo3 = leia.question("Digite a terceira característica (carnivoro/onivoro): ");
        if (tipo3 == "carnivoro" || tipo3 == "onivoro") break;
    }

    else if (tipo2 == "mamifero") {
        tipo3 = leia.question("Digite a terceira característica (onivoro/herbivoro): ");
        if (tipo3 == "onivoro" || tipo3 == "herbivoro") break;
    }

    else if (tipo2 == "inseto") {
        tipo3 = leia.question("Digite a terceira característica (hematofago/herbivoro): ");
        if (tipo3 == "hematofago" || tipo3 == "herbivoro") break;
    }

    else if (tipo2 == "anelideo") {
        tipo3 = leia.question("Digite a terceira característica (hematofago/onivoro): ");
        if (tipo3 == "hematofago" || tipo3 == "onivoro") break;
    }

    console.log("Valor inválido! Digite uma opção válida.\n");
}

if (tipo1 == "vertebrado" && tipo2 == "ave" && tipo3 == "carnivoro") {
    console.log("Águia");
}
else if (tipo1 == "vertebrado" && tipo2 == "ave" && tipo3 == "onivoro") {
    console.log("Pomba");
}
else if (tipo1 == "vertebrado" && tipo2 == "mamifero" && tipo3 == "onivoro") {
    console.log("Homem");
}
else if (tipo1 == "vertebrado" && tipo2 == "mamifero" && tipo3 == "herbivoro") {
    console.log("Vaca");
}
else if (tipo1 == "invertebrado" && tipo2 == "inseto" && tipo3 == "hematofago") {
    console.log("Pulga");
}
else if (tipo1 == "invertebrado" && tipo2 == "inseto" && tipo3 == "herbivoro") {
    console.log("Lagarta");
}
else if (tipo1 == "invertebrado" && tipo2 == "anelideo" && tipo3 == "hematofago") {
    console.log("Sanguessuga");
}
else if (tipo1 == "invertebrado" && tipo2 == "anelideo" && tipo3 == "onivoro") {
    console.log("Minhoca");
}