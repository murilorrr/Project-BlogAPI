const { StatusCodes } = require('http-status-codes');
const postService = require('../services/postService');
const { User } = require('../models');

const createOne = async (req, res, next) => {
  try {
    const post = await req.body;
    const { user } = await req;

    const userFind = await User.findOne({ where: { email: user.email } });
    post.userId = userFind.id;

    const result = await postService.createOne(post);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await postService.getAll();
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  const { user } = await req;

  try {
    await postService.deleteOne(req.params.id, user);
    res.status(StatusCodes.NO_CONTENT).json({});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOne,
  getAll,
  deleteOne,
};