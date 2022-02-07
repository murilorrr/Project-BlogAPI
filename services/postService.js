const JOI = require('joi');
const { StatusCodes } = require('http-status-codes');
const { BlogPost } = require('../models');
const errorHandler = require('../middlewares/errorHandler');
const { Category } = require('../models');

const PostSchema = JOI.object({
  title: JOI.string().required(),
  content: JOI.string().required(),
  categoryIds: JOI.array().required(),
});

const createOne = async ({ title, content, categoryIds, userId }) => {
  const { error } = PostSchema.validate({ title, content, categoryIds });
  if (error) throw errorHandler(StatusCodes.BAD_REQUEST, error.message);

  // validação extra categoryIds

  const promisesResolve = await Promise.all(categoryIds
    .map((categoryId) => Category
    .findOne({ where: { id: categoryId } })));

  if (promisesResolve.includes(null)) throw errorHandler(400, '"categoryIds" not found');

  const categorie = await BlogPost.create({ title, content, userId });
  return categorie;
};

// const getAll = async () => {
//   const categories = await Categories.findAll();
//   return categories;
// };

module.exports = {
  createOne,
  // getAll,
};