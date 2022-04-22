// Dado Virtual

// Selecionar Elementos
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click' , function(){
    // adicionar a animição
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    // tocar o efeito sonoro
    dadoRolando.play()

    // ocultar o botão Sortear
    btnSortear.style.display = 'none'

    // usar setTimeout para executar as ações apos 1.75 segundos

    setTimeout(function(){
        
        //armazenar número sorteado na variável 
        numeroSorteado = getRandomInt(1,6)

        // escrever o numero sorteado no console
        console.log(numeroSorteado)

        // definir atributo src com base no numero
        imgDado.setAttribute('src', '../img/dado/' + numeroSorteado + '.png')

        // escrever no paragrafo numeroSorteado
        sorteado.textContent = numeroSorteado

        // exibir o botao Sortear     
        btnSortear.style.display = 'inline-block'

        // retirar a Animação
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    },1750)

})

// Funcao que gera numero randomico inteiro
// incluindo o mínimo e o maximo

function getRandomInt(min, max){
    min = Math.ceil(min) //arredonda para acima ceil = teto
    max = Math.floor(max)//arredonda para baixo floor = piso
    return Math.floor(Math.random()*(max - min + 1)+ min)
}