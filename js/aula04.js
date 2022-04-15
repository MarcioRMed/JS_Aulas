// Arrays

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigo = Array(10, 20, 30)
var test = Array(10)
test[0] = 'oi'
test[9] = 'tudo bem'
test[10] = 'opa!'

let meses = ['Jan', 'Fev', 'Mar', 'Abr']
meses[0] = 'Janeiro'
meses[2] = 'Março'
 
// ADICIONAR no FINAL "push" = empurre
produtos.push('Açúcar', 'Trigo')
codigo.push(40, 50, 60, 70)
meses.push('Mai', 'Jun', 'Ago', 07)

// REMOVER do FINAL "pop" = estourar
produtos.pop()
codigo.pop()
meses.pop()
meses.pop() //remove pela 2 vez

// ADICIONAR no INCIO "unshift"
produtos.unshift('Uva', 'Maça', 'Pera')

// REMOVER no INICIO "shift"
produtos.shift()

// REMOVER de uma POSIÇÃO ESPECIFICA "splice" = emendar
// posição inicial, quantos elementos remover

codigo.splice(1,3)

// COPIAR ARRAY "slice" = fatiar porção 
// posição inicial, quantos elementos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

// VER TAMANHO ARRAY "length" = comprimento
meses.length
meses1.length
meses2.length

// spreed operator ... "faz copia e adiciona elementos"
let teste = [...produtos, 'Ovo', 'Leite']


