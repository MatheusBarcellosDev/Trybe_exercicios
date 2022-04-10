const readline = require('readline-sync');

const scripts = [
    {name: 'Calcular IMC', path: './imc.js'},
    {name: 'Calcular velocidade média', path: './velocidade.js'},
    {name: 'Jogo da adivinhação', path: './sorteio.js'}
];

let mensagem = scripts.map((script, index) => {
    return `${index + 1} - ${script.name}`;
});

mensagem.unshift('Escolha um número para executar o script correspondente');

mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if(!script) console.log('Numero invalido');

require(script.path);


