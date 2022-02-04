const express = require('express');
const bodyParser = require('body-parser');
const { StatusCodes } = require('http-status-codes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const userService = require('./services/user');

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', async (req, res, next) => {
  const user = req.body;
  try {
    const result = await userService.createUser(user);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);
