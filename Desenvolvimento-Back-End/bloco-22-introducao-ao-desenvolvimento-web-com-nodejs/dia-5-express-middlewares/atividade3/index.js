const express = require('express');
const bodyParser = require('body-parser');

const useRouter = require('./useRouter');
const errors = require('./middlewares/routerNotFound');

const app = express();

app.use(bodyParser.json());

app.use('/posts', useRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(errors.routerNotFound);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 