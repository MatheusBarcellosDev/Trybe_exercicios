const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const teamRouter = require('./teamRouter');
const PORT = 3000;
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/teams', teamRouter);


const readContentFile = async (path) => {
    try {
        const content = await fs.readFile(path, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        return null;
    }
};

app.get('/talker', async (_req, res) => {
    const talkers = fs.readFileSync('./talker.json', 'utf8');
    res.status(200).send(talkers);
});

app.listen(PORT, () => console.log('Run server http://localhost:3000'));
