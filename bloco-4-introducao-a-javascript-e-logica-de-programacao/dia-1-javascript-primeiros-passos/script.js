/* Faça cinco programas, um para cada operação 
aritmética básica. Seu programa deve ter duas 
constantes, a e b , definidas no começo com os 
valores que serão operados. 
*/

const valor1 = 20;
const valor2 = 4;

document.write(`A soma de ${valor1} com ${valor2} é ${valor1 + valor2}<br><br>`);
document.write(`A Subtração de ${valor1} com ${valor2} é ${valor1 - valor2}<br><br>`);
document.write(`A Multiplicação de ${valor1} com ${valor2} é ${valor1 * valor2}<br><br>`);
document.write(`A Divisão de ${valor1} com ${valor2} é ${valor1 / valor2}<br><br>`);
document.write(`O Resto da divisão de ${valor1} com ${valor2} é ${valor1 % valor2}<br><br>`);

/* Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas constantes com os valores 
que serão comparados. */

const numero1 = 30;
const numero2 = 40;
let maior;

if (numero1 > numero2) {
   maior = numero1;
} else {
   maior = numero2;
}

document.write(`O maior numero entre ${numero1} e ${numero2} é ${maior} <br><br>`);

/* Faça um programa que retorne o maior de três 
números. Defina no começo do programa três 
constantes com os valores que serão comparados. */

const number1 = 20;
const number2 = 50;
const number3 = 75;
let maiorNumber;

if (number1 > numero2 && number1 > number3) {
   maiorNumber = number1;
} else if (number2 > number3) {
   maiorNumber = number2;
} else {
   maiorNumber = number3;
}

document.write(`O maior numero entre ${number1},${number2} e ${number3} é ${maiorNumber}<br><br>`)

/* Faça um programa que, dado um valor definido numa constante, 
retorne "positive" se esse valor for positivo, 
"negative" se for negativo e "zero" caso contrário. */

const n = 0;

if (n > 0) {
   document.write(`O numero ${n} é POSITIVE <br><br>`);
} else if (n < 0) {
   document.write(`O numero ${n} é NEGATIVE <br><br>`);
} else {
   document.write(`O numero ${n} é ZERO <br><br>`);

}

/* Faça um programa que defina três constantes com os valores 
dos três ângulos internos de um triângulo. Retorne true se os 
ângulos representarem os ângulos de um triângulo e false , 
caso contrário. Se algum ângulo for inválido o programa deve 
retornar uma mensagem de erro.
 */

const t1 = 30;
const t2 = 30;
const t3 = 30;

if (t1 + t1 < t3 || t1 + t3 < t2 || t2 + t3 < t1) {
   document.write(`Os numeros ${t1},${t2} e ${t3} nao formam um triangulo <br><br>`)
} else {
   document.write(`Os numeros ${t1},${t2} e ${t3} Formam um triangulo <br><br>`)
}

/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */

let xadrez = "TORRE"

xadrez = xadrez.toLowerCase()

if (xadrez == "peao") {
   document.write("O peao só anda para frente <br><br>")
} else if (xadrez == "cavalo") {
   document.write("O cavalo anda em L <br><br>")
} else if (xadrez == "torre") {
   document.write("A torre anda para frente e para o lado <br><br>")
} else if (xadrez == "bispo") {
   document.write("O bispo anda em diagonal <br><br>")
} else if (xadrez == "rainha") {
   document.write("A rainha pode andar em qualquer direcao <br><br>")
} else(
   document.write("Nao é uma peça de xadrez valida <br><br>")
)

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F */

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if . */

const nu1 = 5;
const nu2 = 3;
const nu3 = 1;

if (nu1 % 2 == 0 || nu2 % 2 == 0 || nu3 % 2 == 0) {
   document.write(`Entre os numeros ${nu1},${nu2} e ${nu3} pelo menos um deles é par <br><br>`)
} else {
   document.write(`Nenhum numero é par <br><br>`)
}

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

const num1 = 42;
const num2 = 92;
const num3 = 2;

if (num1 % 2 > 0 || num2 % 2 > 0 || num3 % 2 > 0) {
   document.write(`Entre os numeros ${num1},${num2} e ${num3} pelo menos um deles é impar`)
} else {
   document.write(`Nenhum numero é impar`)
}


/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. 
A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. */

const custoProduto = 70;
const valorVenda = 130;
const imposto = 0.20;

let custoTotalProduto = (custoProduto * imposto) + custoProduto;
let lucroTotal = (valorVenda - custoTotalProduto) * 1000

console.log(lucroTotal);

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. */

const salario = 8000;
let salarioLiquido;

if(salario < 1556.94){
   let aliquota = salario - (salario * 0.8)  ;
   salarioLiquido = salario - aliquota;
   console.log(salarioLiquido)
}else if(salario >= 1556.95 && salario <= 2594.92){
   let aliquota = salario - (salario * 0.9)  ;
   salarioLiquido = salario - aliquota;
   console.log(salarioLiquido)
}else if(salario >= 2594.93 && salario < 5189.82){
   let aliquota = salario - (salario * 0.11)
   if(aliquota >= 1903.99 && aliquota <= 2826.65){
      let Ir = aliquota * 0.075 - 142.80;
   salarioLiquido = aliquota - Ir;
   console.log(salarioLiquido)
   }else if(aliquota >= 2826.66 && aliquota <= 3751.05){
      let Ir = aliquota * 0.15 - 354.80;
   salarioLiquido = aliquota - Ir;
   console.log(salarioLiquido)
   }else if(aliquota >= 3751.06 && aliquota <= 4664.68){
      let Ir = aliquota * 0.225 - 636.13;
   salarioLiquido = aliquota - Ir;
   console.log(salarioLiquido)
   }
}else if(salario >= 5189.82){
   let aliquota = salario - 570.88;
   if(aliquota > 4664,68){
      let Ir = aliquota * 0.275 - 869.36;
   salarioLiquido = aliquota - Ir;
   console.log(salarioLiquido)
   }
}

