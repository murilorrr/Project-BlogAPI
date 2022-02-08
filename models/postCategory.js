module.exports = (sequelize, _DataTypes) => {
  const Posts = sequelize.define('PostsCategory',
  { }, { tableName: 'PostsCategories', timestamps: false });

  Posts.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: Posts,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: Posts,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return Posts;
};