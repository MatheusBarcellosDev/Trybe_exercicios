const express = require('express');
const bodyParser = require('body-parser');
const simpsonsUtils = require('./fs-utils')

const fs = require('fs').promises;

const app = express();

app.use(bodyParser.json());

app.get('/simpsons', async(_req, res) => {
    try {
        const simpsons = await simpsonsUtils.getSimpsons();
        res.status(200).json(simpsons);
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
})

app.get('/simpsons/:id', async(req, res) => {
    const { id } = req.params;
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpson = simpsons.find((s) => s.id === id);

    if(!simpson) {
        return res.status(404).json({ message: "Simpsons not found" });
    }

    return res.status(202).json(simpson);
})

app.post('/simpsons', async(req, res) => {
    const { id, name } = req.body;
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpsonExists = simpsons.find((s) => s.id === id);

    if(simpsonExists) {
        return res.status(409).json({ message: "id already exists" });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();

})


app.listen(3333, () => {
    console.log('Server started on port 3333');
})



