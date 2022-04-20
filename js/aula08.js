// Arquivo JS DOM + altera CSS

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 08 Manipular CSS'
// titulo.innerHTML = 'Aula 08'

let imagem = document.querySelector('#foto')

imagem.setAttribute('src', '../img/foto1.png')
imagem.setAttribute('width', '280px')

// MANIPULAR CSS

// document.querySelector('h1').style.color = 'red'

titulo.style.color='red'
titulo.style.backgroundColor= '#000'
titulo.style.borderBottom = '2px solid red'
titulo.style.padding= '0.625rem' //10px
titulo.style.borderRadius = '5px'

// adiciona o atributo classe
let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'amarelo')

// remove atributo classe
// box[0].removeAttribute('class')

// MODOS DE COR

// modo dark/light / trpoca cor fundo da pag
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')



btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark(){
    // event.preventDefault()
    console.log('modo dark')
    tela.classList.add('dark')
    tela.classList.remove('light')
}

function modoLight(){
    // event.preventDefault()
    console.log('modo light')
    tela.classList.add('light')
    tela.classList.remove('dark')
}


// troca cor do botão
let btFundoImg = document.querySelector('#btFundoImg')

btFundoImg.addEventListener('click', trocaFundoBotao)


let btFundo 

function trocaFundoBotao(){
    if(btFundo){
        btFundo = false
        console.log(btFundo)    
        btFundoImg.classList.remove('amarelo')
        btFundoImg.classList.add('escura')
    }else{        
        btFundo = true   
        console.log(btFundo)
        btFundoImg.classList.remove('escura')
        btFundoImg.classList.add('amarelo')
    }

}
































