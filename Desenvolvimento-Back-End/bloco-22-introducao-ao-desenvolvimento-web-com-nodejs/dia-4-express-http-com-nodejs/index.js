const express = require('express');
const bodyParser = require('body-parser');
const authorization = require('./authorization');
const crypto = require('crypto');

const app = express();

app.use(bodyParser.json());
app.use(authorization);


app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.status(200).json({ "message": `Hello ${name}` });
})

app.post('/greetings', (req, res) => {
    const { name, age } = req.body;
    
    if(parseInt(age, 10) <= 18) {
        res.status(401).json({ "message": `Unauthorized` });
    }

    res.status(200).json({ "message": `Hello, ${name}` });
})

app.put('/users/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.status(200).json({ "message": `Seu nome é ${name} e sua idade é ${age}` });
})


app.post('/singnup', (req, res) => {
    const { email, password, firstName, phone } = req.body;

    if ([email, password, firstName, phone].includes(undefined)) {
        return res.status(401).json({message: 'missing fields'});
    }

    const token = crypto.randomBytes(8).toString('hex');

    res.status(200).json({ token });
})

app.listen(3333, () => {
    console.log('Server started on port 3333');
})