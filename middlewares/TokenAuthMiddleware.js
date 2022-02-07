const status = require('http-status-codes').StatusCodes;
const JWT = require('jsonwebtoken');
const myError = require('./errorHandler');

const secret = process.env.JWT_SECRET || 'segredinho';

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    JWT.verify(authorization, secret);
  } catch (err) {
    if (!authorization) throw myError(status.UNAUTHORIZED, 'Token not found');
    throw myError(status.UNAUTHORIZED, 'Expired or invalid token');
  }
  return next();
};

module.exports = authMiddleware;