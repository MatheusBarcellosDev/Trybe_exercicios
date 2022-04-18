const fs = require('fs/promises');

function getSimpsons () {
    return fs.readFile('./simpsons.json', 'utf-8')
        .then(data => JSON.parse(data));
}

function setSimpsons (newSimpsons) {
    return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };