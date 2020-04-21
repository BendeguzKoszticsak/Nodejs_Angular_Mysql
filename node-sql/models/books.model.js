module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("book", {
      name: {
        type: DataTypes.STRING
      },
      genre: {
        type: DataTypes.STRING
      },
      pages: {
        type: DataTypes.INTEGER
      },
      available: {
        type: DataTypes.BOOLEAN
      }
    });
  
    return Book;
  };