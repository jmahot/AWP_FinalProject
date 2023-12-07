// product.controller.js
const db = require("../models/index.models.product");
const Product = db.products;

exports.create = (req, res) => {
    if (!req.body.title || !req.body.illustrator) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const product = {
        title: req.body.title,
        image: req.body.image,
        illustrator: req.body.illustrator,
        publicationDate: req.body.publicationDate,
        price: req.body.price,
        ISBN: req.body.ISBN,
        note: req.body.note,
    };

    Product.create(product)
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            console.error("Error creating product:", err);
            res.status(500).send({
                message: err.message || "An error occurred during product creation.",
                error: err,
            });
        }); 

// TEST


};

exports.getAllProducts = (req, res) => {
    Product.findAll()
        .then(products => {
            res.status(200).send(products);
        })
        .catch(err => {
            console.error("Error getting products:", err);
            res.status(500).send({ message: "Some error occurred while retrieving products." });
        });
};

exports.getProductByISBN = (req, res) => {
    const ISBN = req.params.ISBN;
    Product.findOne({ where: { ISBN: ISBN} })
        .then(product => {
            if (product) {
                res.status(200).send(product);
            } else {
                res.status(404).send({ message: "Product not found." });
            }
        })
        .catch(err => {
            console.error("Error finding product:", err);
            res.status(500).send({ message: "Error retrieving product with ISBN=" + ISBN });
        });
};


exports.deleteProductByISBN = (req, res) => {
    const ISBN = req.params.ISBN;
    Product.destroy({ where: { ISBN: ISBN } })
        .then(num => {
            if (num == 1) {
                res.status(200).send({ message: "Product deleted successfully." });
            } else {
                res.status(404).send({ message: "Product not found." });
            }
        })
        .catch(err => {
            console.error("Error deleting product:", err);
            res.status(500).send({ message: "Error deleting product with ISBN=" + ISBN });
        });
};