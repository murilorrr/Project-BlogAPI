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

module.exports = {
  createOneCategory,
};
