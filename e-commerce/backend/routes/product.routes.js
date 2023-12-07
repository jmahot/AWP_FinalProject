const products = require('../controllers/product.controller');

module.exports = function(app) {
    app.post('/api/products', products.create);
    app.get('/api/products', products.getAllProducts);
    app.get('/api/products/isbn/:isbn', products.getProductByISBN);
    app.put('/api/products/isbn/:isbn', products.updateProductByISBN);
    app.delete('/api/products/isbn/:isbn', products.deleteProductByISBN);
};