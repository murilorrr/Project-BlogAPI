const { StatusCodes } = require('http-status-codes');
const userService = require('../services/user');

const createUser = async (req, res, next) => {
  const user = req.body;
  try {
    const result = await userService.createUser(user);
    return res.status(StatusCodes.CREATED).json({ token: result });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await userService.getAll();
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getAll,
};
