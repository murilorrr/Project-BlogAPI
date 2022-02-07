const BlogPost = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  { 
    timestamps: false,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'id', as: 'user' });
  };

  return BlogPostTable;
};

module.exports = BlogPost;