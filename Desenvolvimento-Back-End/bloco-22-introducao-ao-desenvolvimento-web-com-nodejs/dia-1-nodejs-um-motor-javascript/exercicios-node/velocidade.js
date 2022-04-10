const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distância da viagem? ');
const velocidade = readline.questionInt('Qual a velocidade? ');

const velocidadeMedia = (distancia / velocidade).toFixed(2);

console.log(`A velocidade media da viagem é de ${velocidadeMedia}`);

