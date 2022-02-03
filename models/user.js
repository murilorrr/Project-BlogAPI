const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('');

const User = sequelize.define(
  'User',
  {
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {},
);

module.exports = User;
