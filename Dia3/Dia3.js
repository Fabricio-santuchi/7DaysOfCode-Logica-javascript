function lerEscolha(msg) {
    return prompt(msg);
}

function exibirDestino(frontEnd, backEnd) {
    console.log("Seu destino é:");

    if (frontEnd === "React") {
        console.log("Front-End com React!");
    } else if (frontEnd === "Vue") {
        console.log("Front-End com Vue!");
    } else if (backEnd === "C#") {
        console.log("Back-End com C#!");
    } else if (backEnd === "Java") {
        console.log("Back-End com Java!");
    } else {
        console.log("Por favor, faça escolhas válidas.");
    }
}

function lerTecnologiasAdicionais() {
    const tecnologias = [];
    let maisTecnologias = true;

    while (maisTecnologias) {
        const tecnologia = lerEscolha("Digite o nome da tecnologia que você gostaria de aprender:");

        console.log(`Excelente escolha! ${tecnologia} é uma tecnologia interessante.`);

        const resposta = lerEscolha("Tem mais alguma tecnologia que você gostaria de aprender? (Sim/Não)");

        if (resposta.toLowerCase() !== "sim") {
            maisTecnologias = false;
        }

        tecnologias.push(tecnologia);
    }

    return tecnologias;
}

function iniciarJogo() {
    console.log("Bem-vindo ao jogo de escolhas de carreira!");

    const area = lerEscolha("Você quer seguir para a área de Front-End ou Back-End? (Front-End/Back-End)");
    let frontEnd, backEnd;

    if (area === "Front-End") {
        frontEnd = lerEscolha("Você quer aprender React ou Vue? (React/Vue)");
    } else if (area === "Back-End") {
        backEnd = lerEscolha("Você quer aprender C# ou Java? (C#/Java)");
    } else {
        console.log("Por favor, faça escolhas válidas.");
        return;
    }

    const tecnologiasAdicionais = lerTecnologiasAdicionais();

    console.log("Você escolheu aprender as seguintes tecnologias adicionais:");
    tecnologiasAdicionais.forEach(tecnologia => console.log(tecnologia));

    exibirDestino(frontEnd, backEnd);
}

iniciarJogo();