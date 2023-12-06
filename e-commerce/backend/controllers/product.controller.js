const db = require("../models/index.models");
const User = db.users;


exports.create = (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const user = {
        username: req.body.username,
        password: req.body.password,
    };}