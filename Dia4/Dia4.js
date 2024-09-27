const bd = document.querySelector("#container");

const btIniciar = document.createElement("button");
btIniciar.textContent = "Iniciar";
btIniciar.classList.add("bt-inicia");
btIniciar.addEventListener("click", iniciarJogo);
bd.appendChild(btIniciar);

const btReiniciar = document.createElement("button");
btReiniciar.textContent = "Reiniciar";
btReiniciar.classList.add("bt-inicia");
btReiniciar.addEventListener("click", reiniciarJogo);
bd.appendChild(btReiniciar);

function lerPergunta(msg) {
  return prompt(msg);
}

function numeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iniciarJogo() {
  alert("Jogo de advinha, Entre 0 e 10!");
  let numeroAle = numeroAleatorio(0, 10);
  console.log(numeroAle);
  let tentativas = 1;

  while (tentativas <= 3) {
    let chute = parseInt(lerPergunta("Qual numero você quer chutar?"));

    if (isNaN(chute) || chute < 0 || chute > 10) {
      alert("Por favor, insira um número válido entre 0 e 10.");
      continue;
    }

    if (chute === numeroAle) {
      let plural = tentativas === 1 ? "" : "es";
      alert(
        `Parabéns você acertou! o número é ${numeroAle}. Você tentou ${tentativas} vez${plural}.`
      );
      return;
    } else if (chute < numeroAle) {
      alert("O número é maior.");
    } else {
      alert("O número é menor.");
    }
    tentativas++;
  }

  alert(`O número era ${numeroAle}. Não foi dessa vez!`);
}

function reiniciarJogo() {
  iniciarJogo();
}
