function equation(n1, n2, n3){
    return new Promise((resolve, reject) => {
        if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number') {
            reject('informe apenas números');
        }
        const result = (n1 + n2) * n3;

        if (result < 50) {
            return reject('valor muito baixo');
        }

        resolve(result);

    })
}


/* function consumeEquation(){
    const n1 = Math.floor(Math.random() * 100 + 1);
    const n2 = Math.floor(Math.random() * 100 + 1);
    const n3 = Math.floor(Math.random() * 100 + 1);

    equation(n1, n2, n3)
        .then(result => console.log(result))
        .catch(error => console.log(error));
}

consumeEquation(); */

async function consumeEquation() {
    const n1 = Math.floor(Math.random() * 100 + 1);
    const n2 = Math.floor(Math.random() * 100 + 1);
    const n3 = Math.floor(Math.random() * 100 + 1);

    try {
        const result = await equation(n1, n2, n3);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

consumeEquation();