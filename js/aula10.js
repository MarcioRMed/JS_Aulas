// Eventos
// dom event obj - w3schools

function carregou(){
    console.log('Página carregada com sucesso!')
}

function focou(){
    console.log('Focou no título')
}

function rolouPagina(){
    console.log('Pagina rolando')
}

function focoNoCampo(){
    console.log('Foco no campo de texto')
}

function semFocoNoCampo(){
    console.log('Saiu o Foco do campo de')
}

// contar quantidade de teclas pressionadas
let letras = document.querySelector('input[type=text]')
function avisarQueTeclou(){
    let numLetras = 1
    console.log('Esta teclando ' + (letras.value.length + numLetras))
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

// mouseover a seta do mouse esta no element
botao1.addEventListener('mouseover', function (){
    console.log('foco no botão 1')
})

// focusout ou blur quando sai o focu
botao2.addEventListener('blur', function (){
    console.log('focos fora do botao 2')
})

botaoEnviar.addEventListener('click', function (event){
    event.preventDefault() // envita o refresh na pag ao clicar
    console.log('Clicou no botão Enviar')
})