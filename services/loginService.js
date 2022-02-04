const Joi = require('joi');
const errorHandler = require('../middlewares/errorHandler');
const { User } = require('../models');
const generateJwt = require('../utils/generateJwt');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

const alreadyExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user || null;
};

const postLogin = async ({ password, email }) => {
  const { error } = userSchema.validate({ password, email }); 
  if (error) throw errorHandler(400, error.message);

  const exists = await alreadyExists(email);
  if (!exists) throw errorHandler(400, 'Invalid fields');

  const token = generateJwt({ password, email });

  return token;
};

module.exports = {
  postLogin,
};
