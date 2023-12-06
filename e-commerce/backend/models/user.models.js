module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING, // or the appropriate data type for your use case
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING, // or the appropriate data type for your use case
        allowNull: false,
      },
    
      
    });
  
    return User;
  };
  