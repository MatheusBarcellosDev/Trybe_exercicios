function positiveOrNegative(n){

    if(typeof n !== 'number'){
        return 'o parâmetro deve ser um número';
    }
    if (n > 0) {
        return "positive";
    } else if (n < 0) {
        return "negative";
    } else {
        return "neutro";
    }
}

module.exports = positiveOrNegative;