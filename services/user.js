const Joi = require('joi');
const errorHandler = require('../middlewares/errorHandler');
const { User } = require('../models');

const regexExp = /@/;

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().regex(regexExp).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const alreadyExists = async (email) => {
  try {
    console.log(email, 'este é o email');
    const user = await User.findOne({ where: { email } });
    console.log('deu certo');
    return user || null;
  } catch (err) {
    console.log('nao deu bom');
  }
};

const createUser = async ({ displayName, password, email, image }) => {
  const { error } = userSchema.validate({ displayName, password, email, image }); 
  if (error) throw errorHandler(400, error.message);

  const exists = await alreadyExists(email);
  if (exists) throw errorHandler(300, 'User already registered');

  // const userCreated = await User.create(user);

  const user = { displayName, password, email, image };
  return user;
};

module.exports = {
  createUser,
};
