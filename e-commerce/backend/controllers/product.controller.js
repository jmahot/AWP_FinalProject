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


exports.getAllProducts = (req, res) => {
    Product.findAll()
        .then(products => { res.status(200).send(products); })
        .catch(err => { res.status(500).send({ message: err.message || "Some error occurred while retrieving products." }); });
};

};

exports.getProductByISBN = (req, res) => {
    const isbn = req.params.isbn;

    Product.findOne({ where: { ISBN: isbn } })
        .then(product => {
            if (product) { res.status(200).send(product); }
            else { res.status(404).send({ message: "Product not found." }); }
        })
        .catch(err => { res.status(500).send({ message: "Error retrieving product with ISBN=" + isbn }); });
};

exports.updateProductByISBN = (req, res) => {
    const isbn = req.params.isbn;

    Product.update(req.body, { where: { codeEAN: isbn } })
        .then(num => {
            if (num == 1) { res.status(200).send({ message: "Product was updated successfully." }); }
            else { res.status(404).send({ message: `Cannot update Product with ISBN=${isbn}. Maybe Product was not found or req.body is empty!` }); }
        })
        .catch(err => { res.status(500).send({ message: "Error updating Product with ISBN=" + isbn }); });
};

exports.deleteProductByISBN = (req, res) => {
    const isbn = req.params.isbn;

    Product.destroy({ where: { ISBN: isbn } })
        .then(num => {
            if (num == 1) { res.status(200).send({ message: "Product was deleted successfully!" }); }
            else { res.status(404).send({ message: `Cannot delete Product with ISBN=${isbn}. Maybe Product was not found!` }); }
        })
        .catch(err => { res.status(500).send({ message: "Could not delete Product with ISBN=" + isbn }); });
};

