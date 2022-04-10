const fs = require('fs').promises;

/* const simpsons = "simpson.json"; */

/* fs.readFile(simpsons, 'utf8')
    .then(data => {
        const simpsons = JSON.parse(data);
        simpsons.map((simpson) => {
            console.log(`${simpson.id} - ${simpson.name}`);
        })
    })
    .catch(error => console.log(error)); */

async function simpson(){
    try {
        const simpsons = "simpson.json";
        const data = await fs.readFile(simpsons, 'utf8');
        const result = JSON.parse(data);
        result.map((simpson) => {
            console.log(`${simpson.id} - ${simpson.name}`);
        })
    } catch (err) {
        console.log(err);
    }
}

simpson();
