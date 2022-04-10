const fs = require('fs').promises;

async function changeSimpsons() {
    const simpsons = await fs
        .readFile('simpson.json', 'utf8')
        .then((fileContent) => JSON.parse(fileContent));

    const simpsonFilter = simpsons.filter(simpson => simpson.id !== '10')
        .filter(simpson => simpson.id !== '6');

    await fs.writeFile('simpson.json', JSON.stringify(simpsonFilter));

   return simpsonFilter;
}

changeSimpsons()
    .then(simpsons => console.log(simpsons));