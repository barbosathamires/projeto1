let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}
function exibirAlerta(){
    alert('Eu amo JS')
}
function exibirPrompt() {
    let nomeDaCidade = prompt('Alagoas:')
    alert (`Estive em ${Alagoas} e lembrei de você`)
}
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo numero'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)

}