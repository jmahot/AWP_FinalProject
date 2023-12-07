// product.models.js
module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        illustrator: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        publicationDate: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        ISBN: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        note: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return Product;
};
