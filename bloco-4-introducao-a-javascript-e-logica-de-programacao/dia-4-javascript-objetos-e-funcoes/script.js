let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let info2 = {
    personagem: 'Tio Patinhas',
    origin: 'Christmas on Bear Mountain, Dell"s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'

}

console.log(`Bem-vinda, ${info.personagem}`);

for (i in info && info2) {
    console.log(`${info[i]} e ${info2[i]}`);
}

function palindrome(string) {

    const reverse = string.split("").reverse().join("");

    if (string == reverse) {
        return console.log(true)
    } else {
        return console.log(false)
    }

}

palindrome("arara")

function value(array) {
    let maior = array[0]

    for (let i of array) {
        if (maior < i) {
            maior = i;
        }
    }

    return console.log(array.indexOf(maior))
}

value([5, 5, 45, 7, 12, 9])

function menorValue(array) {
    let menor = array[0]

    for (let i of array) {
        if (menor > i) {
            menor = i;
        }
    }

    return console.log(array.indexOf(menor))
}

menorValue([5, 6, -5, 7, 12, 9]) 