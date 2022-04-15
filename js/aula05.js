
// CRIAR OBJETO
let pessoa = {
    nome: 'Edson',
    idade: 40,
    peso: 83.5,
    altura: 1.75,
    doador: false,
}
// pessoa.nome

// objeto pessoa 
//propriede nome

// propriedade ou atributos
// propriedade e valor
// chave : valor

let produtos = {
    descriao : [],
    preco : []
}

const carros = {
    marca: ['Ford', 'Fiat', 'GM'],
    modelo: ['Ka', 'Uno', 'Corsa'],
    ano: [ 1999, 2005, 2010]
}

//ACESSAR PROPRIEDADE usando "."
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura

//ACESSAR PROPRIEDADE usando [' ']
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']

// OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// Método
// .toFixed(2)
// limita em 2 casas decimais

console.log('IMC ' + imc.toFixed(2)+ ' -> indice de massa corporal')




// aula ficou em 7min 38seg