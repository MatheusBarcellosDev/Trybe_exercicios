const express = require('express');
const router = express.Router();

const posts = [
    {
        id: "1",
        title: 'Post 1',
        body: 'This is the body of post 1'
    }
];

router.get('/posts', (_req, res) => {
    res.status(200).send(posts);
})


router.post('/create', (req, res) => {
    const { id, title, body } = req.body;
    const post = posts.find((p) => p.id === parseInt(id));

    if (post) return res.status(400).send({message: 'Post already exists'});

    if (!id || !title || !body) return res.status(400).send({message: 'Missing fields'});

    posts.push({id, title, body});

    res.status(200).json({ message: 'Post created successfully' });

})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) return res.status(404).send({message: 'Post not found'});

    res.send(post);
})

module.exports = router;