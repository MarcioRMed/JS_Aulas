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

document.write(compraComDesconto + '<br>')

// ================================================
// DESAFIO

// Exercicio 1

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

document.write(`<hr><h2> Desafio </h2>`)
document.write(`<hr><h3> Exercío 1 </h3>`)
document.write(` Nome do Lutador: ${Lutador} <br>`)
document.write(`Nacionalidade: ${Nacionalidade} <br>`)
document.write(`Idade: ${Idade} anos <br>`)
document.write(`Peso: ${Peso} Kg <br>`)
document.write(`Altura: ${Altura} m <br>`)


document.write(` <div class='card'>
                    <h2>Lutador</h2> 
                    <img src = ''>
                    <p> ${Lutador} </p>
                    <p> ${Nacionalidade} </p>
                    <p> ${Idade} anos </p>
                    <p> ${Peso} Kg  </p>
                    <p> ${Altura} m </p>
                  </div>
               `)

// Exercício 2

// 10/09/2021
// Seja curioso. Leia tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.
// Aaron Swartz

const dia = 10
const mes = 09
const ano = 2021
const frase = 'Seja curioso. Leia tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.'
const autor = 'Aaron Swartz'

document.write(`<hr><h3> Exercío 2 </h3>`)
document.write(`${dia} / ${mes}/ ${ano} <br>`)
document.write(`${frase} <br>`)
document.write(`${autor} <br>`)

// Exercício 3

// Array de meses do ano
// Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro

document.write(`<hr><h3> Exercío 3 </h3>`)

const meses = [` Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro`]

const meses2 = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

document.write(`${meses}<br>`)
document.write(meses2[0] + ', ' + meses2[1] + ', ' + meses2[2] + ', ' + meses2[3]+ ', ' + meses2[4] + '...' )

// Exercício 4

//Objeto Jogo
// Jogo: League OfLegends - LOL
// Desenvolvido por: Riot Games
// Ano do Lançamento: 2009

let jogo = {
    Jogo: 'League ofLegendes - LOL',
    Desenvolvido: ' Riot Games',
    Ano: '2009'
}

document.write(`<hr><h3> Exercío 4 </h3>`)
document.write('Nome do Jogo: ' + jogo.Jogo + '<br>')
document.write('Desenvolvido por:' + jogo.Desenvolvido + '<br>')
document.write('Ano de Lançamento:' + jogo.Ano + '<br>')

























































