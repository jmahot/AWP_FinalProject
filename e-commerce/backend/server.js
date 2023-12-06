const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models/index.models");
const routes = require('./routes/user.routes'); 


app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
 res.json({ message: "Hello EFREI’s Student - Your Server lives!!!"});
});

routes(app);


// Connexion à la base de données et synchronisation
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);

  db.sequelize.sync() // Utilisez force: true uniquement pour le développement
    .then(() => {
      console.log("Drop and re-sync db.");
    })
    .catch((err) => {
      console.log("Failed to sync db: " + err.message);
    });
});