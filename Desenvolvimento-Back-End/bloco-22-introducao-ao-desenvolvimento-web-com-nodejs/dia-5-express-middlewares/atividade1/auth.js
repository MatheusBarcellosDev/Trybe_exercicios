const validateEmail = (req, res, next) => {
    const { email } = req.body;

    const re = /\S+@\S+\.\S+/;
    
    if (!re.test(email)) {
        return res.status(400).send({ message: 'Invalid email' });
    }

    next();
}
const validatePassword = (req, res, next) => {
    const { password } = req.body;

    if (password.length < 4 || password.length > 8) {
        return res.status(400).send({ message: 'Invalid password' });
    }

    next();
} 
const validateUsername = (req, res, next) => {
    const { username } = req.body;

    if (username.length <= 3) {
        return res.status(400).send({ message: 'Invalid username' });
    }

    next();
}


module.exports = {
    validateEmail,
    validatePassword,
    validateUsername,
}