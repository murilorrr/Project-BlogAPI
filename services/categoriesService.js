const JOI = require('joi');
const { StatusCodes } = require('http-status-codes');
const { Category } = require('../models');
const errorHandler = require('../middlewares/errorHandler');

const categorieSchema = JOI.object({
  name: JOI.string().required(),
});

const createCategory = async ({ name }) => {
  const { error } = categorieSchema.validate({ name });
  if (error) throw errorHandler(StatusCodes.BAD_REQUEST, error.message);
  const categorie = await Category.create({ name });
  return categorie;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  getAll,
};