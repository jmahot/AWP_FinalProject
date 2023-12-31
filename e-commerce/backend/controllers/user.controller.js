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
    };

    User.create(user)
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "An error occurred during user creation.",
            });
        });
};



exports.login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).send({
            message: "Username and password are required for login.",
        });
        return;
    }

    // Find a user with the provided username and password
    User.findOne({ where: { username, password } })
        .then((user) => {
            if (user) {
                // User found, login successful
                res.status(200).json({ message: 'Login successful', user });
            } else {
                // User not found or invalid credentials
                res.status(401).json({ message: 'Invalid credentials' });
            }
        })
        .catch((error) => {
            console.error('Error during login:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
};


exports.getAllUsers = (req, res) => {
    User.findAll()
        .then(users => {
            res.status(200).send(users);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving users." });
        });
};

exports.getUserByUsername = (req, res) => {
    const username = req.params.username;

    User.findOne({ where: { username: username } })
        .then(user => {
            if (user) {
                res.status(200).send(user);
            } else {
                res.status(404).send({ message: "User not found." });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving user with username=" + username });
        });
};


exports.deleteUserByUsername = (req, res) => {
    const username = req.params.username;

    User.destroy({
        where: { username: username }
    })
    .then(num => {
        if (num == 1) {
            res.status(200).send({ message: "User was deleted successfully!" });
        } else {
            res.status(404).send({ message: `Cannot delete User with username=${username}. Maybe User was not found!` });
        }
    })
    .catch(err => {
        res.status(500).send({ message: "Could not delete User with username=" + username });
    });
};

