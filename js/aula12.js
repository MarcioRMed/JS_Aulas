// Estruturas de Repetição - for, forEach, while, do while

// FOR = para faça ---------------------------------------------
// i = interador, interação ou index

let incrementa = document.querySelector('.incrementa')
let decrementa = document.querySelector('.decrementa')



// incrementa ---------------------------------------------
for (let i = 0; i <= 5; i++){
     document.write( ' + ' +  i )
    incrementa.textContent +=  ' + ' +  i
  
}

// decrementa ---------------------------------------------
for (let i = 5; i >= 0; i-- ){
    document.write( ' - ' + i )
    decrementa.textContent += ' - ' + i    
}

// Percorrendo uma lista de Arrays---------------------------------------------
let carros = ['Fusca', 'Brasília', 'Gurgel']

let arrayCarros = document.querySelector('.arrayCarros')

for(let i = 0; i < carros.length; i++){
    document.write(`<li> ${carros[i]} </li>`)
    arrayCarros.innerHTML += ` <li> ${carros[i]} </li>`
}

// FOREACH forEach = para cada ---------------------------------------------

let frutas = ['Pera', 'Uva', 'Maça', 'Banana', 'Melancia']

let arrayFrutas = document.querySelector('.arrayFrutas')

frutas.forEach(function(frutas, i){
    document.write(` ${i} - ${frutas} <br>`)
    arrayFrutas.innerHTML += `${i} - ${frutas} <br>`
})


let arrayCarros2 = document.querySelector('.arrayCarros2')
carros.forEach(function (carros){
    document.write(`${carros} <br>`)
    arrayCarros2.innerHTML+= `${carros} <br>`
})

// WHILE enquanto ---------------------------------------------
// criar variavel de contador fora do laço
let contador = 0

while(contador < frutas.length){
    console.log(frutas[contador])
    contador++    
}
// aqui o contador esta com o valor 5
console.log(contador)

// DO WHILE faça enquanto ---------------------------------------------
// faz um vez para depois verificar se é verdadeira

// criar variavel de contador fora do laço
let iterador = 0

do{
    console.log(carros[iterador])
    iterador++
} while(iterador > carros.lenght)

