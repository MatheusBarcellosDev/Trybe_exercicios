let numbers = [10, 8, 4, 20, 70, 8, 100, 4, 36, 18];
let soma = 0;
let mediaAritmética = 0;
let maiorValor = 0;
let menorValor = numbers[0];
let valoresImpar = 0;
let array = [];
let arrayDivido = [];

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
console.log(soma);

mediaAritmética = soma / numbers.length;

if (mediaAritmética >= 20) {
    console.log("Valor maior ou igual a 20");
} else {
    console.log("Valor menor ou igual a 20");
}

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > maiorValor) {
        maiorValor = numbers[i];
    }
}

console.log(maiorValor);

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 > 0) {
        valoresImpar ++;
    }
}
if(valoresImpar > 0) {
    console.log(`A quantidade de valor impares no array é ${valoresImpar}`);
}else{
console.log("Nenhum valor impar encontrado");
}

for(i = 0; i < numbers.length; i++) {
    if(numbers[i] < menorValor){
        menorValor = numbers[i];
    }
   
}

console.log(menorValor);

for(i = 0; i <= 25; i++) {
    array.push(i);
}

console.log(array);

for(i = 0; i < array.length; i++) {
    arrayDivido.push(array[i] / 2);
}

console.log(arrayDivido);