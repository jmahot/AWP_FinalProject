module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
      category: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      account: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
    });
  
    return Product;
  };
  