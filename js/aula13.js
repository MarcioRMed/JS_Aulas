// Calculadora IMC
// Manipular formulário

// Selecoine todos os elementos que seja Manipular

let formulario = document.querySelector('form')
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#imc')
let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa') // array de dados

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

// Para pegar os dados que estao dentro das caixas use a propriedade .value Mas, antes determine um evento como referencia para pegar os dados

// Adicinei escutador para o btnEnviar
// Uma funcao anonima para pegar os valores
// calcula imc

btnEnviar.addEventListener('click', function (e){
    // pegar os values de cada input

    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso/(altura*altura)).toFixed(1)
    






})