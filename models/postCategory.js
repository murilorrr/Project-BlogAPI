module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('PostsCategory', {
    postId: DataTypes.NUMBER, categoryId: DataTypes.NUMBER,
  }, { timestamps: false });

  // Posts.associate = (models) => {
  //   models.BlogPost.belongsToMany(models.Category, {
  //     as: 'categories',
  //     through: Posts,
  //     foreignKey: 'postId',
  //     otherKey: 'categoryId',
  //   });
  // };
  // models.Category.belongsToMany(models.BlogPost, {
  //   as: 'posts',
  //   through: PostsCategories,
  //   foreignKey: 'categoryId',
  //   otherKey: 'postId',
  // });
  // };
  return Posts;
};