const JOI = require('joi');
const { StatusCodes } = require('http-status-codes');
const { Post } = require('../models');
const errorHandler = require('../middlewares/errorHandler');

const PostSchema = JOI.object({
  title: JOI.string().required(),
  content: JOI.string().required(),
  categoryIds: JOI.array().required(),
});

const createOne = async ({ title, content, categoryIds }) => {
  const { error } = PostSchema.validate({ title, content, categoryIds });
  if (error) throw errorHandler(StatusCodes.BAD_REQUEST, error.message);

  const categorie = await Post.create({ title, content, categoryIds });
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