
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

// ALTERAR / ATUALIZAR VALOR de propriedades
pessoa.nome = "Edson Maia"
produtos.descricao = ['Arroz']
produtos.preco = [4.99]

// usando spreed operator
produtos.descricao = [...produtos.descricao, 'Feijao', 'Trigo']
produtos.preco = [...produtos.preco, 9.99, 4.79]

// Usando spreed operator em objetos const
carros.marca = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano = [...carrros.ano, 1979]




























