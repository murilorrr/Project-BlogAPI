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

module.exports = {
  createOne,
};