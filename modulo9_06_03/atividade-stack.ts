import readlineSync from "readline-sync";
import { Stack } from "./Stack.ts";


const pilhaLivros = new Stack<string>();
let opcao: number = 0;
let livro: string;

do {
  console.log("\n  MENU  ");
  console.log("1 - Adicionar livro na pilha");
  console.log("2 - Listar todos os livros");
  console.log("3 - Retirar livro da pilha");
  console.log("0 - Sair");

  opcao = readlineSync.questionInt("Selecione uma opção: ");

  switch (opcao) {
    case 0:
      console.log("Programa finalizado!");
      break;

    case 1:
      livro = readlineSync.question("Digite o nome do livro: ");
      pilhaLivros.push(livro);
      break;

    case 2:
      pilhaLivros.printStack();
      break;

    case 3:
      if (pilhaLivros.isEmpty()) {
        console.log("Pilha vazia!");
      } else {
        const livroRetirado = pilhaLivros.pop();
        console.log(`Livro retirado: ${livroRetirado}`);
      }
      break;

    default:
      console.log("Opção inválida!");
  }
} while (opcao !== 0);