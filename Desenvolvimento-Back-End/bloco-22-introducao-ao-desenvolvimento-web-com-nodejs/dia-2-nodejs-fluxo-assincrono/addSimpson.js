const fs = require('fs').promises;

async function addSimpson() {
    const simpsons = await fs
        .readFile('simpsonsFamily.json', 'utf8')
        .then((fileContent) => JSON.parse(fileContent))

    const nelsonMuntz = {
        id: '5',
        name: 'Nelson Muntz',
    };

    simpsons.push(nelsonMuntz)

    await fs.writeFile('simpsonsFamily.json', JSON.stringify(simpsons))

}

addSimpson();

