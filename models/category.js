module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
  },
  {
    tableName: 'Categories',
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
  });

  return Category;
};
