const express = require('express');
const router = express.Router();

const {
    validateEmail,
    validatePassword,
    validateUsername,
} = require('./auth');

router.post(
    '/register',
    validateEmail,
    validatePassword,
    validateUsername,
    (_req, res) => res.status(201).json({ message: 'User created'})
);

router.post(
    '/login',
    validateEmail,
    validatePassword,
    (_req, res) => res.status(200).json({ token: '86567349784e'})
);


module.exports = router;