const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

/* Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: 
o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

const addParameter = (obj, key, value) => obj[key] = value;

addParameter(lesson2, 'turno', 'noite');

console.log(lesson2);

/* Crie uma função para listar as keys de um objeto. Essa função deve receber um 
objeto como parâmetro. */

const listKeys = obj => console.log(Object.keys(obj));

listKeys(lesson1);

/* Crie uma função para mostrar o tamanho de um objeto. */

const sizeObject = obj => console.log(Object.keys(obj).length);

sizeObject(lesson1);

/* Crie uma função para listar os valores de um objeto. Essa função deve receber um 
objeto como parâmetro. */

const listValues = obj => console.log(Object.values(obj));

listValues(lesson1);

/* Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . 
Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: */

const allLessons = {
    lesson1: Object.assign({}, lesson1),
    lesson2: Object.assign({}, lesson2),
    lesson3: Object.assign({}, lesson3),
}

console.log(allLessons);

/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em 
todas as aulas. */

const totalStudents = obj => Object.values(obj).reduce((acc, curr) => acc + curr.numeroEstudantes, 0);

console.log(totalStudents(allLessons));

/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: */

const positionObject = (obj, key) => {
    const object = Object.values(obj);
    return object[key] 
};

console.log(positionObject(lesson1, 2));

/* Crie uma função que verifique se o par (chave / valor) existe na função. 
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.*/

const existsInObject = (obj, key, value) => {
    const arr = Object.entries(obj);
    console.log(arr)
    return arr.some(([item1, item2]) => item1 === key && item2 === value);
};


console.log(existsInObject(lesson3, 'turno', 'noite'));
console.log(existsInObject(lesson3, 'materia', 'Maria Clara'));


const soma = (n) => {
    let cont = 0
    for (let i = 1; i <= n; i++) {
        cont += i
    }
    return cont
}

console.log(soma(6))
