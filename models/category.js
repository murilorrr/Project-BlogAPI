module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
  });

  // Category.associate = (models) => {
    //   Category.hasMany(models.PostCategory,
    //   { foreignKey: 'categoryId', as: 'posts' });
    // };

  return Category;
};
