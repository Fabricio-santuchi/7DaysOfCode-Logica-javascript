const estudante = {}

estudante.nome = prompt(`Qual o seu nome?`);
estudante.idade = prompt('Quantos anos você tem?');
estudante.linguagem = prompt('Qual linguagem de programação você está estudando?');

alert(`Olá ${estudante.nome}, você tem ${estudante.idade} anos e já está aprendendo ${estudante.linguagem}!`);

const resposta = parseInt(prompt(`Você gosta de estudar ${estudante.linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`));

if(resposta == 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
}else{
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
    const opcoes = prompt('Responda com o número 1 para SIM ou 2 para NÃO. ');
    if(opcoes == 1){
        alert('\nMuito bom! Continue estudando e você terá muito sucesso. ');
    } else {
        alert('\nAhh que pena... Desejo boa sorte para você na próxima! ');
    }    
}
