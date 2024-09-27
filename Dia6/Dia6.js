const tela = document.querySelector("body");
const bt = document.createElement("button");
bt.classList.add("bt-inicia");
bt.textContent = "Iniciar";
bt.addEventListener("click", superMercado);
tela.appendChild(bt);

const btR = document.createElement("button");
btR.classList.add("bt-inicia");
btR.textContent = "Reiniciar";
btR.addEventListener("click", reiniciar);
tela.appendChild(btR);

const listaDeCompras = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
};

function contaItemDentroLista() {
  for (const chave in listaDeCompras) {
    if (listaDeCompras[chave].length >= 1) return true;
  }
  return false;
}

function exibirNaTela() {
  alert(`    Lista de compras:
    Frutas: ${listaDeCompras.frutas.join(", ")}
    Laticínios: ${listaDeCompras.laticinios.join(", ")}
    Congelados: ${listaDeCompras.congelados.join(", ")}
    Doces: ${listaDeCompras.doces.join(", ")}`);
}

function superMercado() {
  let conteudo = true;
  while (conteudo) {
    if (contaItemDentroLista()) {
      conteudo = prompt(
        "Se você deseja adicionar uma comida na sua lista de compras Digite (1). Caso queria deletar algum item da sua lista Digite (2). \n(Adicionar (1) / Deletar (2) / sair (3)"
      );
    } else {
      conteudo = prompt(
        "Se você deseja adicionar uma comida na sua lista de compras? \n(Adicionar (1) / sair (3)"
      );
    }

    switch (parseInt(conteudo)) {
      case 1:
        let alimento = prompt("qual comida você deseja inserir?");
        const categoriaAlimento = prompt(
          "Em qual categoria essa comida se encaixa? \n(frutas, laticinios, congelados, doces)"
        );

        if (listaDeCompras.hasOwnProperty(categoriaAlimento)) {
          listaDeCompras[categoriaAlimento].push(alimento);
        } else {
          alert("Categoria inválida!");
        }
        break;

      case 2:
        exibirNaTela();
        let delAlimento = prompt("Qual alimento voce quer deletar da lista?");
        for (const chave in listaDeCompras) {
          if (listaDeCompras[chave].includes(delAlimento)) {
            const index = listaDeCompras[chave].indexOf(delAlimento);
            listaDeCompras[chave].splice(index, 1);
            alert(`Pronto o item ${delAlimento} foi deletado da lista.`);
            break;
          } else {
            alert(`O item ${delAlimento} não foi encontrado na lista!`);
          }
        }
        break;

      case 3:
        conteudo = false;
        break;

      default:
        alert("Digitou algo de errado! tente de novo.");
    }
  }
  exibirNaTela();
}

function reiniciar() {
  for (const chave in listaDeCompras) {
    listaDeCompras[chave] = [];
  }
  alert("Lista reiniciada!");
}
