module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      title: {
        type: Sequelize.STRING, // or the appropriate data type for your use case
        allowNull: false,
      },
      illustrator: {
        type: Sequelize.STRING, // or the appropriate data type for your use case
        allowNull: false,
      },
      publicationDate: {
        type: Sequelize.STRING, // or the appropriate data type for your use case
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER, // or the appropriate data type for your use case
        allowNull: false,
      },
      codeEAN: {
        type: Sequelize.INTEGER, // or the appropriate data type for your use case
        allowNull: false,
      },
      Note: {
        type: Sequelize.STRING, // or the appropriate data type for your use case
        allowNull: false,
      },
    
      
    });
  
    return Product;
  };
  