const BlogPost = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  { 
    timestamps: false,
    tableName: 'BlogPosts',
  });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User,
      { foreignKey: 'id', as: 'user' });
  };

  return BlogPostTable;
};

module.exports = BlogPost;