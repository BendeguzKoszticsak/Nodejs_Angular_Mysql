module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("book", {
      isbn: {
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      authors: {
        type: DataTypes.STRING
      },
      published: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      coverImage: {
        type: DataTypes.STRING
      }
    });
  
    return Book;
  };