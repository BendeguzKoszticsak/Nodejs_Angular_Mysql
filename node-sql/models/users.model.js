module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      F_name: {
        type: DataTypes.STRING
      },
      L_name: {
        type: DataTypes.STRING
      },
      text: {
        type: DataTypes.STRING
      },
      Age: {
        type: DataTypes.INTEGER
      },
      rented: {
        type: DataTypes.BOOLEAN
      }
    });
  
    return User;
  };