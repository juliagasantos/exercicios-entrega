import readlineSync from "readline-sync";
import { Stack } from "./Stack.ts";


const historico = new Stack<string>();
let opcao: number = 0;
let pagina: string;

do {
  console.log("\n   MENU DO NAVEGADOR   ");
  console.log("1 - Abrir nova página");
  console.log("2 - Visualizar histórico");
  console.log("3 - Voltar à página anterior");
  console.log("0 - Sair");

  opcao = readlineSync.questionInt("Selecione uma opção: ");

  switch (opcao) {
    case 0:
      console.log("Programa finalizado!");
      break;

    case 1:
      pagina = readlineSync.question("Digite o nome ou URL da página: ");
      historico.push(pagina);
      console.log(`Página "${pagina}" aberta e adicionada ao histórico.`);
      break;

    case 2:
      if (historico.isEmpty()) {
        console.log("Histórico vazio!");
      } else {
        console.log("Histórico de páginas (do mais recente para o mais antigo):");
        historico.printStack();
      }
      break;

    case 3:
      if (historico.isEmpty()) {
        console.log("Histórico vazio! Nenhuma página para voltar.");
      } else {
        const paginaAnterior = historico.pop();
        console.log(`Voltando da página: ${paginaAnterior}`);
      }
      break;

    default:
      console.log("Opção inválida!");
  }
} while (opcao !== 0);