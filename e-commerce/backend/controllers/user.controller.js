const db = require("../models/index.models")
const User = db.users;
const { Sequelize, DataTypes, Op } = require("sequelize");

exports.create = (req, res) => {
    
        if (!req.body.username || !req.body.password) {
            res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
        }
        
        const user = {
            username: req.body.username,
            password: req.body.password,
        };
    
        User.create(user)
        .then(data => {
          res.status(201).send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: err.message || " An Error occure during the creation of the user."
          });
        });
    };