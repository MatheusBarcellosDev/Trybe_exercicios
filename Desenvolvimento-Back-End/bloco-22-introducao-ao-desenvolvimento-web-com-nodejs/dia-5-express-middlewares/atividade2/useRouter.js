const express = require('express');
const router = express.Router();
const getApi = require('./fetchApi');

const validateToken = require('./auth');


router.get(
    '/price',
    validateToken,
    async (_req, res) => {
        const result = await getApi();

        res.send(result.data);
    }
);

module.exports = router;