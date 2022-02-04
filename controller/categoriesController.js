const { StatusCodes } = require('http-status-codes');
const categoryService = require('../services/categoriesService');

const createOneCategory = async (req, res, next) => {
  const category = req.body;
  try {
    const result = await categoryService.createCategory(category);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await categoryService.getAll();
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOneCategory,
  getAll,
};
