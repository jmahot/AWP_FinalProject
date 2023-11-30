const db = require('../models');
const User = db.user;

exports.registerUser = (req, res) => {
  const { nickname, email, password } = req.body;

  // Implement user registration logic, including password hashing
  // (You might want to use a library like bcrypt for password hashing)

  User.create({
    nickname,
    email,
    password, // Make sure to hash the password before storing it in production
  })
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

// Implement other user-related controller functions as needed
