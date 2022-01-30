const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }

}

testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
//Essa funcao recebe 2 numeros e diminui o primeiro pelo segundo se o resultado for positivo ele troca os valores de posicao
oddsAndEvens.sort(function (a, b) {
  return a - b;
})

console.log(oddsAndEvens);

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

/* const fatorial = number => {
   let result = 1;
   for (let i = number; i > 1; i--){
       result *= i
   }
   console.log(result);
  } */

const fatorial = number => number > 1 ? number * fatorial(number - 1) : number

console.log(fatorial(6));

const longestWord = str => {
  let result = str.split(" ");
  let maior = result[0]
  for(let i = 0; i < result.length; i++){
    if(result[i].length > maior.length){
      maior = result[i]
    }
  }
  return console.log(maior);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")



const btn = document.querySelector('.btn')
let span = document.querySelector('#span')

let cont = 0;

btn.addEventListener('click', () => span.innerText = cont += 1);

const getLetter = letter => { console.log(letter.replace(/a/g, 'X')); }

getLetter('Antônio foi no banheiro e não sabemos o que aconteceu');


const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

function addObject(obj,key,value) {
  return obj[key] = value;
}

addObject(customer, 'lastName', 'Silva');

console.log(customer);

function people(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
}

const people1 = new people('Matheus', '30', 'Masculino');

console.log(people1);

const people2 = new people('Rogerio', '35', 'Masculino');

console.log(people2);

people1.lastName = "Barcellos"

console.log(people1);

console.log(Object.keys(people1));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arraySkills = Object.keys(student);
  for(index in arraySkills){
    console.log(`${arraySkills[index]}, Nivel: ${student[arraySkills[index]]}`)
  }
}

listSkills(student1);

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);

console.log(person.name);

console.log(Object.entries(países));

const top3Albums = {
  1: 'Nightfall in Middle-Earth',
  2: 'Imaginations from the Other Side',
  3: 'Somewhere Far Beyond',
};

console.log(Object.entries(top3Albums));









