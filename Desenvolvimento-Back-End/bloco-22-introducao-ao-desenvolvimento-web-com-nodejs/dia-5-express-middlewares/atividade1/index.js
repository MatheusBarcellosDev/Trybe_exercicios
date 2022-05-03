const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const useRouter = require('./useRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', useRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));