const JOI = require('joi');
const { StatusCodes } = require('http-status-codes');
const { Categories } = require('../models');
const errorHandler = require('../middlewares/errorHandler');

const categorieSchema = JOI.object({
  name: JOI.string().required(),
});

const createCategory = async ({ name }) => {
  const { error } = categorieSchema.validate({ name });
  if (error) throw errorHandler(StatusCodes.BAD_REQUEST, error.message);
  const categorie = await Categories.create({ name });
  return categorie;
};

const getAll = async () => {
  const categories = await Categories.findAll();
  return categories;
};

module.exports = {
  createCategory,
  getAll,
};