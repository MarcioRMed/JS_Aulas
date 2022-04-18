/**
 * DOM = Document Object Model
 * Arvore com elementos desde o Browser, a Janela do Browser, o Documento e cada elemento html que formam os contéudos
 * 
 * navigator
 *  location
 *  document -> html -> head e body
 *  history
 * 
 * PARA MANIPULAR O DOM PRECISAMOS
 * indicar qual o objeto usar, depois
 * chamar um médodo(função) para 
 * selecionar ele, seus dados, trazer informações, etc.
 * 
 *  
 */

// qual o navegaro sendo usado
const browser = navigator.userAgent
console.log(browser)

// informações da url
const Location = location
console.log(Location)


// .querySelector()
// selecionar elemento com base na tag, #id ou .class


// seleciona o h1
document.querySelector('h1')

// seleciona pelo id
document.querySelector('#titulo')

// seleciona pela classe
document.querySelector('.box')

// seleciona todos h2
document.querySelector('h2')

// 
let titulo = document.querySelector('h1')
console.log(titulo)

let titulo2 = document.querySelectorAll('h2')
console.log(titulo2)


//.textContent
// propriedade ou atributo textContent
// server para acessar ou alterar conteudo de um elemento  que foi selecionado

console.log(titulo.textContent) 
console.log(titulo.innerHTML)

titulo.textContent = 'modifiquei o texto do h1'
console.log(titulo.textContent)

// .querySelectorAll
// selecionar todos elementos com base na tag, #id ou .class

let testando = document.querySelectorAll('.box')
console.log(testando)

// mostrou conteudo do array posicao 0
document.write(testando[0].textContent)
console.log(testando[0].textContent)

document.write(testando[1].textContent)
console.log(testando[1].textContent)

document.write(testando[2].textContent)
console.log(testando[2].textContent)

// modificar o box 1
testando[0].textContent = 'modifiquei o texto do box 1'

// Exitem também os métodos
// MAS, PREFIRA USAR O .querySelector()

/***
 * 
 *  .getElementsByTagName()
 *  .getElementById()
 *  .getElementsByClassName()
 */


let testeTag = document.getElementsByTagName('div')
console.log(testeTag)
document.write(testeTag[0].textContent)
document.write(testeTag[1].textContent)
document.write(testeTag[2].textContent)


let testeId = document.getElementById('titulo')
console.log(testeId)


let testeClass = document.getElementsByClassName('box')
console.log(testeClass)
document.write(testeClass[0].textContent)
document.write(testeClass[1].textContent)
