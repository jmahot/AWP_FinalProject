module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
      nickname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      // Add more fields as needed
    });
  
    return User;
  };
  