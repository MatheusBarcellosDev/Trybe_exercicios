const readline = require('readline-sync');

const result = (numero, resposta) => {
    if(numero === resposta) {
        console.log('Parabéns, número correto!');
    }else{
        console.log(`Opa, não foi dessa vez. O número sorteado foi ${numero}`);
    }
}

const initialGame = () => {
    const numberSort = parseInt(Math.random() * 10);

    const inputUser = readline.questionInt('Digite um numero entre 0 e 10? ');

    result(numberSort, inputUser);

    const again = readline.question('Deseja jogar novamente? (S/N) ').toLocaleLowerCase();
    
    if(again === 's'){
        initialGame();
    }else{
        console.log('Até a próxima!');
    }
}

initialGame();