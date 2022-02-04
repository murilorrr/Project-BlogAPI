const { StatusCodes } = require('http-status-codes');
const postService = require('../services/postService');

const createOne = async (req, res, next) => {
  const post = req.body;
  try {
    const result = await postService.createOne(post);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createOne,
};