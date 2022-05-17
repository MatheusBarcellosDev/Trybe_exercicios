const express = require('express')
const bodyParser = require('body-parser')
const userModel = require('./models/userModel')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.post('/user', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const newId = await userModel.create(req.body);

    const newUser = {
        id: newId,
        firstName,
        lastName,
        email
    }

    res.status(201).json(newUser);
})

app.get('/user', async (_req, res) => {
    const [users] = await userModel.findAll();

    res.status(200).json(users);
})

app.get('/user/:id', async (req, res) => {
    const { id } = req.params;

    const user = await userModel.findById(id);

    if (user.length === 0) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    res.status(200).json(user);
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))