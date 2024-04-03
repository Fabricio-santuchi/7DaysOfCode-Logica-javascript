const div = document.querySelector('#container');

const bt = document.createElement('button');
bt.textContent = 'Iniciar';
bt.classList.add('bt-inicia');
div.appendChild(bt);

bt.addEventListener('click', () =>{
    alert('Vamos calcular');

    let operador;
    while(true){
        operador = prompt('Qual operador você escolhe: (+) (-) (*) (/) (sair).');
        
        if(operador === 'sair'){
            return;
        }
        if(operador === '+' || operador === '-' || operador === '*' || operador ==='/'){
            console.log('Operador logico: '+operador);
            break;
        }else{
            alert('Escreveu algo errado!');
        }
    }

    let valorUm;
    while(true){
        valorUm = Number(prompt('Diga o primeiro número para operação:'));
        if(!isNaN(valorUm)){
            console.log('ValorUm: '+ valorUm);
            break;
        }else{
            alert('Pfv Digite um numero!');
        }
    }

    let valorDois;
    while(true){
        valorDois = Number(prompt('Diga o segundo número para operação:'));
        if(!isNaN(valorDois)){
            console.log('ValorDois: '+valorDois);
            break;
        }else{
            alert('Pfv Digite um numero!');
        }
    }
    
    let valorFinal = 0;
    let opEscrit = '';

    switch(operador){
        case '+':
            valorFinal = somar(valorUm,valorDois);
            opEscrit = 'soma';
            break;
        
        case '-':
            valorFinal = subtrair(valorUm,valorDois);
            opEscrit = 'subtração';
            break;
            
        case '*':
            valorFinal = multiplicar(valorUm,valorDois);
            opEscrit = 'multiplicação';
            break;

        case '/':
            valorFinal = dividir(valorUm,valorDois);
            opEscrit = 'divisão';
            break;
        default:
            break;
    }
    alert(`A ${opEscrit} dos valores ${valorUm} e ${valorDois} é: ${valorFinal}`);
});

function somar(n1, n2) {
    return n1+n2;
}

function subtrair(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    if(n1 <= 0 || n2 <= 0){
        return 'Erro! Numeros menores que 1 não podem ser multiplicados!';
    }else{
        let valorConverti = n1 * n2;
        if(valorConverti % 1 !== 0 ){
            return valorConverti.toFixed(2);
        }else{
            return valorConverti;
        }
    }
}

function dividir(n1, n2) {
    if(n2 <= 0){
        return 'Erro! Não é possível dividir por zero!';
    }else{
        let valorConverti = n1 / n2;
        if(valorConverti % 1 !== 0 ){
            return valorConverti.toFixed(2);
        }else{
            return valorConverti;
        }
    }
}
