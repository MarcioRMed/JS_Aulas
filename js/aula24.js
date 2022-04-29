// Mensagem do dia 

let citacao00 = document.querySelector('#citacao00')
let dataCitacao = citacao00.querySelector('h2')
let textoCitacao = citacao00.querySelector('blockquote')
let autoriaCitacao = citacao00.querySelector('span')

let aviso = document.querySelector('#aviso')
let divBaixar = document.querySelector('#divBaixar')

function criarCitacao(){
    let dataInput = document.querySelector('#data').value
    let citacao = document.querySelector('#citacao').value
    let autoria = document.querySelector('#autoria').value

    let data = new Date(dataInput)
    let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    // validacao simples
    if(data == '' || citacao == '' | autoria == ''){
        abrirModal()
    } else{
        criarMensagem(dataFormatada, citacao, autoria)
        window.scroll(0,670)
    }

}