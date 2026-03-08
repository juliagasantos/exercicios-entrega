import readlineSync from "readline-sync";
import { Queue } from "./Queue.ts";

const filaClientes = new Queue<string>();
let opcao: number = 0;
let nome;
let cliente: string | undefined;

function mostrarProximoCliente() {
  if (filaClientes.isEmpty()) {
    console.log("Fila vazia! Nenhum cliente na vez.");
  } else {
    const proximo = filaClientes.peek();
    console.log(`Próximo cliente a ser atendido: ${proximo}`);
  }
}

do {
  console.log(
    "1 - Adicionar cliente na fila\n2 - Listar todos os clientes\n3 - Retirar cliente da fila\n0 - Sair",
  );
  opcao = readlineSync.questionInt("Selecione uma opção: ");

  switch (opcao) {
    case 0:
      console.log("Programa finalizado!");
      break;
    case 1:
      nome = readlineSync.question("Digite o nome do cliente: ");
      filaClientes.enqueue(nome);
      break;
    case 2:
      filaClientes.printQueue();
      break;
    case 3:
      if (filaClientes.isEmpty()) {
        console.log("Fila vazia!");
      } else {
        cliente = filaClientes.dequeue();
        console.log(`Cliente: ${cliente}`);
      }
      break;
    default:
      console.log("Opção inválida!");
  }
}while (opcao != 0);