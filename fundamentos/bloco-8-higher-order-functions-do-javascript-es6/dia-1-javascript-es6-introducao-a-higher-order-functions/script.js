/* Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF 
newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função 
deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele 
gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
 */

const newEmployees = (callback) => {
    const employees = {
      id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const newPerson = (name) => {
    return {nomme: name, email: `${name.replace(/ /g, "_")}@trybe.com`
    }
    
};

console.log(newEmployees(newPerson));

/* Desenvolva uma HOF que retorna o resultado de um sorteio. 
Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros 
o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const compareNumber = (a, b) => {
    return a === b;
};

const sort = (num, func) => {
    const sorted = Math.floor(Math.random() * 5) + 1;

    return func(num, sorted) ? "Você acertou" : "Você errou";
}

console.log(sort(2, compareNumber));

/* Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas 
(Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) 
e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final 
recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando 
não houver resposta ("N.A") não altera-se a contagem.
 */

const checkAnswers = (gabarito, answers, func) => {
    return func(gabarito, answers)
}


const compareAnswers = (arr1, arr2) => {
    let count = 0;
    arr1.forEach((item, index) => {
        if (item === arr2[index] && arr2[index] !== "N.A") {
            count += 1;
        }else{
            count -= 1;
        }
    });
    return count;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

/* Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. 
Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
Para os próximos exercícios copie o código abaixo. */

/* const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };


  const danoDragon = (min, max) => {
    min = 15
    max = dragon.strength
    return Math.floor(Math.random() * (max - min )) + min;
  }

  const danoWarrior = (min, max) => {
      min = warrior.strength;
      max = warrior.strength * warrior.weaponDmg;
      return Math.floor(Math.random() * (max - min )) + min;
  }

  const danoMago = (min, max) => {
     
    min = mage.intelligence;
    max = mage.intelligence * 2;
    return Math.floor(Math.random() * (max - min )) + min;
  }

  const mageStatus = () => {
      
    const mage = {
      mana: 15,
      mageDano: danoMago(),
    }

    if (mage.mana < 15) {
      mage.mana = 0;
      mage.mageDano = 'Não possui mana suficiente';
    }

    return mage;

  }

  const gameActions = {
     turnWarrior: () => {
       warrior.damage = danoWarrior();
       warrior.healthPoints -= dragon.damage;
     },
     turnMage: () => {
       mage.damage = danoMago();
       mage.healthPoints -= dragon.damage;
     },
     turnDragon: () => {
        dragon.damage = danoDragon();
        dragon.healthPoints -= warrior.damage;
     }

  }; */

    
   