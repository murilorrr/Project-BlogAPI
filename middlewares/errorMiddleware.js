const { StatusCodes } = require('http-status-codes');

module.exports = (_req, res, _next, error) => {
  if (error.status) {
    console.log(error.message);
    return res.status(error.status).json({ message: error.message });
  }
  console.log(error);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
};