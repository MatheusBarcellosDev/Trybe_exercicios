const fs = require('fs').promises;

async function searchSimpson(id) {
    const simpsons = await fs
        .readFile('simpson.json', 'utf8')
        .then((fileContent) => JSON.parse(fileContent));

    const simpson = simpsons.find(simpson => simpson.id === id);

    if (!simpson) {
        throw new Error('Simpson não encontrado');
    }

    return simpson;
}

searchSimpson('1')
    .then(simpson => console.log(simpson))
    .catch(error => console.log(error));
