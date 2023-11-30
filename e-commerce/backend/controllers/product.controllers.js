const db = require('../models');
const Product = db.product;

exports.getAllProducts = (req, res) => {
  Product.findAll()
    .then(products => {
      res.json(products);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

// Implement other product-related controller functions as needed
