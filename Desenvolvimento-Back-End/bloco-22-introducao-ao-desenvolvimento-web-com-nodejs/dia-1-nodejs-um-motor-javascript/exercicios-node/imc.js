const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? ');
const altura = readline.questionInt('Qual a sua altura? ');

const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

const resultado = () => {
    if (imc < 18.5) {
        console.log(`Seu IMC é ${imc} e você está abaixo do peso.`);
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(`Seu IMC é ${imc} e você está com o peso ideal.`);
    } else if (imc >= 25 && imc <= 29.9) {
        console.log(`Seu IMC é ${imc} e você está com sobrepeso.`);
    } else if (imc >= 30 && imc <= 34.9) {
        console.log(`Seu IMC é ${imc} e você está com obesidade grau I.`);
    } else if (imc >= 35 && imc <= 39.9) {
        console.log(`Seu IMC é ${imc} e você está com obesidade grau II.`);
    } else if (imc >= 40) {
        console.log(`Seu IMC é ${imc} e você está com obesidade grau III.`);
    }
}

resultado();