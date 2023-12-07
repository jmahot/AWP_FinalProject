
const products = require('../controllers/product.controller');

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.json({ message: "Hello EFREI Student - Your Server lives!!!" });
    });

    app.post('/api/product', products.create);

    // Route for user registration
   

    
   


//test




}
