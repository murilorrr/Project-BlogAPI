const { StatusCodes } = require('http-status-codes');

const errorMiddleware = (err, req, res, _next) => {
  console.log('-----------------------------', err);

  if (err.code) {
    return res.status(err.code).json(err);
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
};

module.exports = errorMiddleware;