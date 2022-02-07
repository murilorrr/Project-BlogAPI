const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/loginService');

const postLogin = async (req, res, next) => {
  const user = req.body;
  try {
    const result = await loginService.postLogin(user);
    return res.status(StatusCodes.OK).json({ token: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postLogin,
};
