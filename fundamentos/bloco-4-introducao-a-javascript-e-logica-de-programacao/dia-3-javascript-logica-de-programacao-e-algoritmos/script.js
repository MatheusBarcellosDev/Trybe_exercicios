let n = 5;

function quadrado(number){
    for (var i = 0; i < number; i++){
        console.log("*".repeat(number));
    }
}

function triangulo(number){
    for(var i = 0; i < number; i++){
        console.log("*".repeat(i+1))
    }
}

function trianguloInvertido(number){
    for(var i = 0; i < number; i++){
        console.log(" ".repeat(number - i), "*".repeat(i+1));
    }
}

function trianguloPerfeito(number){
    for(var i = 0; i < number; i++){
        console.log(" ".repeat(number - i), " *".repeat(i+1));
    }
}

quadrado(5)
triangulo(5)
trianguloInvertido(5)
trianguloPerfeito(5)

let primo = 4;
let count = 0;

for(var i = 0; i <= primo; i++) {
    if(n % i==0){
        count ++
    }
}
if (count == 2 ){
    console.log(`O numero ${primo} é primo`)
}else{
    console.log(`O numero ${primo} nao é primo`)
}

