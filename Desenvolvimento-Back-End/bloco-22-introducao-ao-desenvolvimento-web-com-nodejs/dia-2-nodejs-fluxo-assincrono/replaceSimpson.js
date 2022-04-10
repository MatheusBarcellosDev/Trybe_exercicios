const fs = require('fs').promises;

function replaceNelson(){
    return fs.readFile('simpsonsFamily.json', 'utf8')
        .then((fileContent) => JSON.parse(fileContent))
        .then((simpsons) => simpsons.filter((simpson) => simpson.name !== 'Nelson'))
        .then((simpsonsWithoutNelson) => simpsonsWithoutNelson.concat([{id: '6', name: 'Maggie Simpson'}]))
        .then((simpsonsWithMaggie) => fs.writeFile('simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)) 
        .then(() => simpsonsWithMaggie));
}

replaceNelson();
            
        