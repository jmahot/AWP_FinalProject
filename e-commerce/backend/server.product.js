const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models/index.models");
const routes = require('./routes/user.routes'); 
const routes2 = require('./routes/product.routes'); 


app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes2(app);
const PORT2 = process.env.PORT2 || 5001;
app.listen(PORT2, () => {
  console.log(`Server has started on port ${PORT2}`);

  db.sequelize.sync() // Utilisez force: true uniquement pour le développement
    .then(() => {
      console.log("Drop and re-sync db.");
    })
    .catch((err) => {
      console.log("Failed to sync db: " + err.message);
    });
});
