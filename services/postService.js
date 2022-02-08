const JOI = require('joi');
const { StatusCodes } = require('http-status-codes');
const errorHandler = require('../middlewares/errorHandler');
const { Category, User, BlogPost } = require('../models');

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
// , through: { attributes: [] }
const getAll = async () => {
  try {
    const result = await BlogPost.findAll({
      // include: [{ all: true }],
      include: [
        { model: Category, as: 'categories', through: { attributes: [] } },
        { model: User, as: 'user' },
      ],
      // include: [{ model: User, as: 'user' }],
    });
    return result;
  } catch (err) {
    return console.log(err);
  }
};

const getById = async (id) => {
    const result = await BlogPost.findOne({
    // include: [{ all: true }],
    where: { id },
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
      { model: User, as: 'user' },
    ],
    // include: [{ model: User, as: 'user' }],
  });
  if (!result) throw errorHandler(404, 'Post does not exist');
  return result;
};

const deleteOne = async (id, user) => {
  const exists = await BlogPost.findOne({ where: { id } });
    if (!exists) throw errorHandler(StatusCodes.NOT_FOUND, 'Post does not exist');

    const userFind = await User.findOne({ where: { email: user.email } });

    if (userFind.id !== exists.userId) {
    throw errorHandler(StatusCodes.UNAUTHORIZED, 'Unauthorized user');
    }
  try {
    const result = await BlogPost.destroy({ where: { id } });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createOne,
  getAll,
  deleteOne,
  getById,
};