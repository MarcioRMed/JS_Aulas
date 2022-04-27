// Quiz - refatorado

let titulo = document.querySelector("h1");
let instrucoes = document.querySelector("#instrucoes");
let aviso = document.querySelector("#aviso");
let respostaEsta = document.querySelector("#respostaEsta");
let pontos = 0; //pontos placar
let placar = 0; //placar

// Audio
let somAcerto = document.querySelector('#somAcerto')
let somErro = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// Perguntas
let numQuestao = document.querySelector("#numQuestao");
let pergunta = document.querySelector("#pergunta");

// Alternativas
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

// article com a class questoes
let articleQuestoes = document.querySelector(".questoes");
let alternativas = document.querySelector("#alternativas");

// Questoes
const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Boreal é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Norte",
    alternativaD : "Oeste",
    correta      : "Norte",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é a capital do Brasil?",
    alternativaA : "Rio de Janeiro",
    alternativaB : "Brasília",
    alternativaC : "Salvador",
    alternativaD : "Lisboa",
    correta      : "Brasília",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Austral é o mesmo que...",
    alternativaA : "Oeste",
    alternativaB : "Leste",
    alternativaC : "Norte",
    alternativaD : "Sul",
    correta      : "Sul",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "A linha do Equador divide a Terra em...",
    alternativaA : "Leste e Oeste",
    alternativaB : "Norte e Sul",
    alternativaC : "Verão e Inverno",
    alternativaD : "Solstícios e Eclipses",
    correta      : "Norte e Sul",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Nascente é o mesmo que...",
    alternativaA : "Lado que o sol nasce",
    alternativaB : "Abaixo do Equador",
    alternativaC : "Lado que o sol se põe",
    alternativaD : "Acima do Equador",
    correta      : "Lado que o sol nasce",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual é o clima predominante do Brasil?",
    alternativaA : "Polar",
    alternativaB : "Tropical",
    alternativaC : "Desértico",
    alternativaD : "Temperado do Norte",
    correta      : "Tropical",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Poente é o mesmo que...",
    alternativaA : "Lado onde o sol se põe",
    alternativaB : "Lado onde o sol nasce",
    alternativaC : "Abaixo do Equador",
    alternativaD : "Acima do Equador",
    correta      : "Lado onde o sol se põe",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "Oceania",
    alternativaD : "América",
    correta      : "América",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é a única capital do Brasil cortada pela linha do Equador?",
    alternativaA : "Belém",
    alternativaB : "São Luís",
    alternativaC : "Macapá",
    alternativaD : "Boa Vista",
    correta      : "Macapá",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Considerando a extensão territorial o Brasil é o ...",
    alternativaA : "3º maior",
    alternativaB : "2º maior",
    alternativaC : "4º maior",
    alternativaD : "5º maior",
    correta      : "5º maior",
}


// Constante com um array de objetos com todas as questões
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

let numero = document.querySelector("#numero");
let total = document.querySelector("#total");

numero.textContent = q1.numQuestao;
let totalDeQuestoes = (questoes.length) - 1;
console.log("Total de questões " + totalDeQuestoes);
total.textContent = totalDeQuestoes;

// Montar a 1a questao completa, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

// Configurar o value inicial da 1a questao completa
a.setAttribute("value", "1A");
b.setAttribute("value", "1B");
c.setAttribute("value", "1C");
d.setAttribute("value", "1D");

// para montar as próximas questoes
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao;
    numQuestao.textContent = questoes[nQuestao].numQuestao;
    pergunta.textContent = questoes[nQuestao].pergunta;
    a.textContent = questoes[nQuestao].alternativaA;
    b.textContent = questoes[nQuestao].alternativaB;
    c.textContent = questoes[nQuestao].alternativaC;
    d.textContent = questoes[nQuestao].alternativaD;
    a.setAttribute("value", nQuestao + "A");
    b.setAttribute("value", nQuestao + "B");
    c.setAttribute("value", nQuestao + "C");
    d.setAttribute("value", nQuestao + "D");
    progresso.value = parseInt(progresso.value)+ 1
    // console.log(progresso.value)
}

// verificar duplo click nas alternativas (bug)
alternativas.addEventListener('dblclick', () => {
    // console.log('duplo click')
    pontos -= 10 //tira 10 pontos em caso de duplo click
    if(numQuestao.values == 10 && pontos == 110) {pontos = 100}
})


function bloquearAlternativas() {
    alternativas.classList.add("bloqueado");    
}

function desbloquearAlternativas() {
    alternativas.classList.remove("bloqueado");  
}

// efeitos de animação
function piscarNoAcerto(){
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}
function piscarNoErro(){
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar(){
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}


function verificarSeAcertou(nQuestao, resposta) {
    
    let numeroDaQuestao = nQuestao.value;
    console.log("Questao " + numeroDaQuestao);

    let respostaEscolhida = resposta.textContent;
    console.log("RespU " + respostaEscolhida);

    let certa = questoes[numeroDaQuestao].correta;
    console.log("RespC " + certa);

    if (respostaEscolhida == certa) {
        console.log("Acertou");
        // respostaEsta.textContent = 'Correta'
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10;
    } else {
        console.log("Errou");
        // respostaEsta.textContent = 'Errada'
        piscarNoErro()
        somErro.play()
    }

    setTimeout(()=>{
        tirarPiscar()
    },150)

    // atualizar placar
    placar = pontos;
    instrucoes.textContent = "Pontos " + placar;

    // bloquear a escolha de opções
    bloquearAlternativas();

    setTimeout(function () {
        // respostaEsta.textContent = '...'
        proxima = numeroDaQuestao + 1;

        if (proxima > totalDeQuestoes) {
            console.log("Fim de Jogo!");
            fimDoJogo();
        } else {
            proximaQuestao(proxima);
        }
    }, 250);

    desbloquearAlternativas();
}

function fimDoJogo(){

    somAplausos.play()
    
    let s = 's'
    pontos == 0 ? s = ' ' : s = s
    instrucoes.textContent= 'Fim de Jogo! Você conseguiu ' + pontos + ' ponto' + s

    instrucoes.classList.add('placar')

       
    // ocultar o article da questao
    articleQuestoes.style.display = 'none'
    
    setTimeout(function(){
        pontos = 0 // zerar o placar
        // location.reload();
        
        instrucoes.classList.remove('placar')
        
        // reinicia o jogo
        articleQuestoes.style.display= 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a quetão e clique na resposta correta'
        progresso.value = 1

    },8000)

}
