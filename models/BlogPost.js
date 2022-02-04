module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.hasOne(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPosts;
};
