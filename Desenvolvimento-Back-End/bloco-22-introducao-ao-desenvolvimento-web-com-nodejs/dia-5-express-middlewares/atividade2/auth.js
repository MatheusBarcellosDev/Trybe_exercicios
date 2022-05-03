const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    const regex = /[^A-Za-z0-9]+/;

    if(!token || regex.test(token)) {
        return res.status(401).send({ message: 'Invalid token' });
    }

    next();
}

module.exports = validateToken;