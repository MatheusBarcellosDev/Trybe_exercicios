const express = require('express');
const bodyParser = require('body-parser');

const useRouter = require('./useRouter');

const app = express();

app.use(bodyParser.json());

app.use('/btc', useRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
