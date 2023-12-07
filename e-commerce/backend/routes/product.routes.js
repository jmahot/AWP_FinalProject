const products = require('../controllers/product.controller');

module.exports = function(app) {
    // Route pour créer un produit
    app.post('/api/product', products.create);

    // Route pour obtenir tous les produits
    app.get('/api/product', products.getAllProducts);

    // Route pour obtenir un produit par ISBN
    app.get('/api/product/ISBN/:ISBN', products.getProductByISBN);

    // Route pour mettre à jour un produit par ISBN
    app.put('/api/product/ISBN/:ISBN', products.updateProductByISBN);

    // Route pour supprimer un produit par ISBN
    app.delete('/api/product/ISBN/:ISBN', products.deleteProductByISBN);
   



//test


}
