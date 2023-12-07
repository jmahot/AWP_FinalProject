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
