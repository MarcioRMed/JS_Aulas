// Relogio digital

let relogio = document.querySelector('#relogio')
let h = document.querySelector('#h')
let m = document.querySelector('#m')
let s = document.querySelector('#s')

let hSmart = document.querySelector('#hSmart')
let mSmart = document.querySelector('#mSmart')
let sSmart = document.querySelector('#sSmart')

let data = document.querySelector('#data')
let semana = document.querySelector('#semana')

let dataHora = new Date()

// console.log(dataHora)

function moveRelogio(){

    let momentoAtual = new Date()
    let hora = momentoAtual.getHours()
    let minuto = momentoAtual.getMinutes()
    let segundo = momentoAtual.getSeconds()

    let strHora = new String(hora)
    let strMinuto = new String(minuto)
    let strSegundo = new String(segundo)

    if (strSegundo.length == 1) segundo = '0' + segundo
    if (strMinuto.length == 1) minuto = '0' + minuto
    if (strHora.length == 1) hora = '0' + hora


    h.textContent = hora
    m.textContent = minuto
    s.textContent = segundo

    hSmart.textContent = hora
    mSmart.textContent = minuto
    sSmart.textContent = segundo

    setTimeout('moveRelogio()',1000)

}
