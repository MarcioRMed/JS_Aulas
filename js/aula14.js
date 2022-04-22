// Calculadora Média

let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

// selecionar caixas de texto por id
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

// Calcular Media
function calcularMedia(n1, n2){
    return ( n1 + n2 )/ 2
}

// Definir situação final com base na Media
function situacaoFinal(mediaFinal){
    let situacaoFinal = ''
    if (mediaFinal >= 7){
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal <= 3){
        situacaoFinal = 'Reprovado(a)'
    } else{
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}

// Formatar a caixa de situação final
function formatarSituacao(situacaoFinal){
    console.log('Situação Final ' + situacaoFinal)

    switch(situacaoFinal){  
              
        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
            break

        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
            break
        
        case 'Recuperação(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            console.log('adicionar class recuperacao')
            break
        default:
            console.log('Situação Indefinida')
    }//fim do switch case
}

// Validar e gerar Flash Message
function validarNumero(numero){
    let num1 = cxNota1.value
    let num2 = cxNota2.value

    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10){
        formulario.reset() //limpar form
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        },3000);
    }
}

// Calcular a média após o click no botão
btnCalcular.addEventListener('click', function(e){
    console.log('Calcular Média')
    // pegar o valor que esta dentro das caixas
    // usar metodo parseFloat p converter string p float

    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = calcularMedia(nota1, nota2)

    console.log(nota1)
    console.log(nota2)
    console.log(media)

    if(isNaN(media) || media < 0){
        console.log('Não é um número')
        cxSituacao.value = ''
    } else{
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()
})

btnLimpar.addEventListener('click', function(){
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
})