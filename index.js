const express = require('express');
const bodyParser = require('body-parser');
const { StatusCodes } = require('http-status-codes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const userService = require('./services/user');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', async (request, response, next) => {
  const user = request.body;
  try {
    const result = await userService.createUser(user);
    return response.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    return next(error);
  }
});

app.use(errorMiddleware);
