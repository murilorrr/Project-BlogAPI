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

const getById = async (req, res, next) => {
  try {
    const result = await userService.getById(req.params.id);
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    await userService.deleteOne(authorization);
    return res.status(StatusCodes.NO_CONTENT).json({});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getAll,
  getById,
  deleteOne,
};
