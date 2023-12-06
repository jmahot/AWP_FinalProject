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
}
