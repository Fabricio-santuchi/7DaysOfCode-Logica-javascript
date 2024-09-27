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

function superMercado() {
  let conteudo = true;
  while (conteudo) {
    conteudo = prompt(
      "você deseja adicionar uma comida na sua lista de compras? (Sim/Não)"
    );
    if (conteudo.toLocaleLowerCase() == "sim") {
      let alimento = prompt("qual comida você deseja inserir?");

      const categoriaAlimento = prompt(
        "Em qual categoria essa comida se encaixa? (frutas, laticinios, congelados, doces)"
      );

      if (categoriaAlimento.toLocaleLowerCase() === "frutas")
        listaDeCompras.frutas.push(alimento);
      if (categoriaAlimento.toLocaleLowerCase() === "laticinios")
        listaDeCompras.laticinios.push(alimento);
      if (categoriaAlimento.toLocaleLowerCase() === "congelados")
        listaDeCompras.congelados.push(alimento);
      if (categoriaAlimento.toLocaleLowerCase() === "doces")
        listaDeCompras.doces.push(alimento);
    } else if (
      conteudo.toLocaleLowerCase() == "não" ||
      conteudo.toLocaleLowerCase() == "nao"
    ) {
      conteudo = false;
    } else {
      alert("Digitou algo de errado! tente de novo.");
    }
  }

  alert(`    Lista de compras:
    Frutas: ${listaDeCompras.frutas}
    Laticínios: ${listaDeCompras.laticinios}
    Congelados: ${listaDeCompras.congelados}
    Doces: ${listaDeCompras.doces}`);
}

function reiniciar() {
  for (const chave in listaDeCompras) {
    listaDeCompras[chave] = [];
  }
  alert("Lista reiniciada!");
}
