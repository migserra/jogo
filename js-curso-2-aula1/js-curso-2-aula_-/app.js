let lista = []
let numeroSecreto = gerarNumero()
let tentativas = 1
function mudarTudo(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
mudarTudo('h1', 'arrombadinho junior')
mudarTudo('p', 'escolhe ai um numero entre 1 e 10')

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
        mudarTudo('h1', 'Voce ganhou meu mano')
        let mensagemTentativa = `voce ganhou com ${tentativas} tentativa(s)`
        mudarTudo('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled')
    };
    if (chute > numeroSecreto) {
        mudarTudo('p', 'o numero eh menor po')
        tentativas++
        limpar()
    };
    if (chute < numeroSecreto){
        mudarTudo('p', 'o numero eh maior po')
        tentativas++
        limpar()
    };
};

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1)
    let quantidade = lista.length
    if (quantidade==10){
        lista=[]
    }
    if(lista.includes(numeroEscolhido)){
        return gerarNumero();
    } else{
        lista.push(numeroEscolhido);
        return numeroEscolhido;
    }
};
console.log(numeroSecreto);

function limpar(){
    chute = document.querySelector('input');
    chute.value = ''
};

function novo(){
    numeroSecreto = gerarNumero()
    limpar()
    tentativas = 1
    mudarTudo('h1', 'arrombadinho junior')
    mudarTudo('p', 'escolhe ai um numero entre 1 e 10')
    console.log(numeroSecreto)
    document.getElementById('reiniciar').setAttribute('disabled', true)
}