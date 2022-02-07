const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');
const errorHandler = require('../middlewares/errorHandler');
const { User } = require('../models');
const generateJwt = require('../utils/generateJwt');
const decode = require('../utils/decodedJWT');

const userSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string(),
});

const alreadyExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user || null;
};

const createUser = async ({ displayName, password, email, image }) => {
  const { error } = userSchema.validate({ displayName, password, email, image }); 
  if (error) throw errorHandler(StatusCodes.BAD_REQUEST, error.message);

  const exists = await alreadyExists(email);
  if (exists) throw errorHandler(StatusCodes.CONFLICT, 'User already registered');

  const token = generateJwt({ displayName, password, email, image });

  await User.create({ displayName, password, email, image });

  return token;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) throw errorHandler(StatusCodes.NOT_FOUND, 'User does not exist');
  return user;
};

const deleteOne = async (token) => {
  // decode
  
  const user = decode(token);

  try {
    const result = await User.destroy({ where: { email: user.email } });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createUser,
  getAll,
  getById,
  deleteOne,
};
