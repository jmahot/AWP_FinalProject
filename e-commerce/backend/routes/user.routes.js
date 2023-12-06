// routes/user.routes.js

const users = require('../controllers/user.controller');

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.json({ message: "Hello EFREI Student - Your Server lives!!!" });
    });

    // Route for user registration
    app.post('/api/users', users.create);

    // Route for user login
    app.post('/api/login', users.login);
    
    // Route to get all users
    app.get('/api/users', users.getAllUsers);

    // Route to get a single user by username
    app.get('/api/users/username/:username', users.getUserByUsername);

    // Route to delete a user by username
    app.delete('/api/users/username/:username', users.deleteUserByUsername);
}
