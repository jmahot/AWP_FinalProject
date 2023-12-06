module.exports = function(app) {

    const users = require('../controllers/user.controller');

    app.get("/", (req, res) => {
    res.json({ message: "Hello EFREI Student - Your Server lives!!!" });
    });
    
    app.post('/api/users', users.create);
   } 