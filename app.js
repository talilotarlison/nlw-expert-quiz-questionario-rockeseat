import  './style.css';
import perguntas from './questoes.js';
// console.log(perguntas);

// logica da aplicacão de questoes


let questions = document.getElementById("quiz-questoes");
let todasRespostas = document.getElementsByClassName("alternativa");
let resultado = document.getElementById("resultado");

// for nas questoes do array

for (var item in perguntas) {
  questions.innerHTML += ` <dl class='quiz'>
                              <dt>
                                <h2>
                                  ${perguntas[item].pergunta}
                                </h2>
                              </dt>
                                ${perguntas[item].respostas.map((resposta, index) => {
                                     return (` <dd >
                                                <input class='alternativa'  data-idade="28"
                                                type='radio' 
                                                name=${perguntas.indexOf(perguntas[item])} 
                                                value=${index}>
                                                <label>
                                                  ${resposta}
                                                </label><br>
                                              </dd>
                                            `);
                                 }).join("")}
                           </dl>
                         `;
}

// for em todos dos intens radio

for (var x = 0; x < todasRespostas.length; x++) {
  todasRespostas[x].addEventListener("click", (e) => {
    // console.log(e.target.dataset.idade)
    // console.log(e.target.value);
    // console.log(e.target.name);
    Escolha(e.target.value, e.target.name)
  });
}

const acertos = new Set();

resultado.innerHTML = `<h2>Você acertou: ${acertos.size} de 10.</h2>`;

function Escolha(resposta, questao) {
  resultado.innerHTML = '';
  // console.log('click');
  // console.log(questao, resposta);
  if (perguntas[questao].correta == resposta) {
    // console.log('acertou');
    acertos.add(perguntas[questao]);
    resultado.innerHTML = `<h2>Você acertou: ${acertos.size} de 10. </h2>`;
  } else {
    acertos.delete(perguntas[questao]);
  }
  resultado.innerHTML = `<h2>Você acertou: ${acertos.size} de 10.</h2>`;
};


