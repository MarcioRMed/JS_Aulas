// Quiz

let titulo = document.querySelector("h1");
let instrucoes = document.querySelector("#instrucoes");
let aviso = document.querySelector("#aviso");
let respostaEsta = document.querySelector("#respostaEsta");
let pontos = 0; //pontos placar
let placar = 0; //placar

// Perguntas
let numQuestao = document.querySelector("#numQuestao");
let pergunta = document.querySelector("#pergunta");

// alternativas
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");

// article com a class questoes
let articleQuestoes = document.querySelector(".questoes");
let alternativas = document.querySelector("#alternativas");

// Questoes
const q0 = {
    numQuestao: 0,
    pergunta: "Pergunta",
    alternativaA: "AlternativaA",
    alternativaB: "AlternativaB",
    alternativaC: "AlternativaC",
    correta: 0,
};

const q1 = {
    numQuestao: 1,
    pergunta: "Boreal é o mesmo que...",
    alternativaA: "Sul",
    alternativaB: "Leste",
    alternativaC: "Norte",
    correta: "Norte",
};

const q2 = {
    numQuestao: 2,
    pergunta: "Austral é o mesmo que...",
    alternativaA: "Oeste",
    alternativaB: "Sul",
    alternativaC: "Norte",
    correta: "Sul",
};

const q3 = {
    numQuestao: 3,
    pergunta: "Nascente é o mesmo que...",
    alternativaA: "Sul",
    alternativaB: "Leste",
    alternativaC: "Oeste",
    correta: "Leste",
};
const q4 = {
    numQuestao: 4,
    pergunta: "Poente é o mesmo que...",
    alternativaA: "Norte",
    alternativaB: "Leste",
    alternativaC: "Oeste",
    correta: "Oeste",
};
const q5 = {
    numQuestao: 5,
    pergunta: "O Brasil se localiza em qual continente?",
    alternativaA: "África",
    alternativaB: "Europa",
    alternativaC: "América",
    correta: "América",
};

// Constante com um array de objetos com todas as questões
const questoes = [q0, q1, q2, q3, q4, q5];

let numero = document.querySelector("#numero");
let total = document.querySelector("#total");

numero.textContent = q1.numQuestao;
let totalDeQuestoes = questoes.length - 1;
console.log("Total de questões " + totalDeQuestoes);
total.textContent = totalDeQuestoes;

// Montar a 1a questao completa, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaB;

// Configurar o value inicial da 1a questao completa
a.setAttribute("value", "1A");
b.setAttribute("value", "1B");
c.setAttribute("value", "1C");

// para montar as próximas questoes
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao;
    numQuestao.textContent = questoes[nQuestao].numQuestao;
    pergunta.textContent = questoes[nQuestao].pergunta;
    a.textContent = questoes[nQuestao].alternativaA;
    b.textContent = questoes[nQuestao].alternativaB;
    c.textContent = questoes[nQuestao].alternativaC;
    a.setAttribute("value", nQuestao + "A");
    b.setAttribute("value", nQuestao + "B");
    c.setAttribute("value", nQuestao + "C");
}

function bloquearAlternativas() {
    a.classList.add("bloqueado");
    b.classList.add("bloqueado");
    c.classList.add("bloqueado");
}

function desbloquearAlternativas() {
    a.classList.remove("bloqueado");
    b.classList.remove("bloqueado");
    c.classList.remove("bloqueado");
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
        pontos += 10;
    } else {
        console.log("Errou");
        // respostaEsta.textContent = 'Errada'
    }

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
    instrucoes.textContent= 'Fim de Jogo'
    numQuestao.textContent = ''

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont ='pontos'

    pergunta.textContent = 'Você conseguiu ' + pontos + '' + pont

    aviso.textContent = 'Você conseguiu ' + pontos + '' + pont

    a.textContent = ''
    b.textContent = ''
    c.textContent = ''

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    
    // ocultar o article da questao
    articleQuestoes.style.display = 'none'
    
    setTimeout(function(){
        pontos = 0 // zerar o placar
        location.reload();
    },3000)








}
