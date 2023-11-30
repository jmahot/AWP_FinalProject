const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Product routes
app.use('/api', productRoutes);

// User routes
app.use('/api', userRoutes);

// Database synchronization (you might want to adjust this based on your needs)
db.sequelize.sync().then(() => {
  console.log('Database synced');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
