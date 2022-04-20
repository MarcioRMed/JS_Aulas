// FUNÇOES 
let titulo = document.querySelector('h1')
titulo.textContent = 'Funções em JS'
let box = document.querySelectorAll('box')


// Funções sem parametros e sem retorno (procedure)
function olaMundo(){
    document.write('Olá mundo sem retorno <br>')
}


// Funções se parametro e com retorno (function)
function olaMundo2(){
    return 'Olá mundo com retorno <br>'
    
}

// Chamar função = executar a função

olaMundo()
document.write(olaMundo2())


let x = 2
let y = 1

let mensagem = 'Jesus Cristo é o salvador'

// Funções com parametros e sem parametros (procedure)

function somar(a, b){
    document.write((a+b)+ '<br>')
}

// Funções com parametros e com retorno (function)
function somar2(c, d){
    return c + d
}

// Chamar a função
somar(x, y)
somar(10, 5)

document.write(`<p> ${somar2(x, y)} </p>`)
document.write(`<p> ${somar2(5, 2)} </p>`)

// função anonima = nao tem nome, pode ou nao ter parametros, pode ou nao ter retorno

titulo.addEventListener('click', function(){
    console.log('clicou no título')
})


// Arrow Functions ES6 2015 em diante
const olaMundoArrow = ()=> document.write('Olá mundo!!!!!')
// nao precisa usar palavra function
// nao precisa usar a palavra return
// nao se usa nome da funcao
// nao precisa colocar {} se for so uma instrução

const olaMundo2Arrow = ()=> '<p> Olá Mundo com arrow function </p>'

olaMundoArrow()
document.write(olaMundo2Arrow())