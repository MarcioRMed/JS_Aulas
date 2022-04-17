// Revisão
// Comentário de uma linha

/*
Comentário de em bloco
*/

// Criar variáveis use let ou var
let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario
document.write(`Preço Total R$ ${precoTotal} <br>`)
console.log(new Intl.NumberFormat('pt-BR').format(precoTotal))

document.write(`Preço Total ${precoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<hr>`)

// criar constantes
const nome = 'Edson Maia'
const peso = 83.5
const altura = 1.75
const imc = peso / (altura * altura)

document.write(`IMC:${imc}<br>`)
document.write(`IMC: ${imc.toFixed(2)}<br>`)

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = nota1 + nota2 + nota3
document.write("Nota Final " + notaFinal + '<br>')

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto
document.write(compraComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '<br>')

document.write(compraComDesconto + '<br')

// Desafio
// Informações
// Lutador: Fedor Vladimrovich Emelianenko
// Nacionalidade: Russo
// Idade: 44
// Peso: 106 Kg
// Altura: 1.83 m

let Lutador = 'Fedor Vladimrovich Emelianenko'
let Nacionalidade = 'Russo'
let Idade = 44
let Peso = 106 
let Altura = 1.83


document.write(`Nome do Lutador: ${Lutador} `)

document.write(`IMC:${imc}<br>`)




































































