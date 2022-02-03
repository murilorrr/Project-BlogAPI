const Joi = require('joi');
const errorHandler = require('../middlewares/errorHandler');
const userModel = require('../models/user');

const regexExp = /@/;

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().min().regex(regexExp).required(),
  password: Joi.string().min(6).required(),
});

const alreadyExists = async (user) => {
  const userAlreadyExists = await userModel.findOne({ where: { email: user.email } });

  return userAlreadyExists || null;
};

const createUser = async ({ displayName, password, email, image }) => {
  const { error, user } = userSchema.validate({ displayName, password, email, image }); 
  if (error) throw errorHandler(400, error.message);

  const exists = await alreadyExists(user);
  if (exists) throw errorHandler(300, 'User already registered');

  const userCreated = await userModel.create(user);
  return userCreated;
};

module.exports = {
  createUser,
};
