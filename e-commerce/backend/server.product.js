// server.product.js
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models/index.models.product");
const routes = require('./routes/product.routes'); 

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Hello EFREI’s Student - Your Server lives!!!" });
});

routes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);

    db.sequelize.sync() // Change this to force: true only for development
        .then(() => {
            console.log("Drop and re-sync db.");
        })
        .catch((err) => {
            console.log("Failed to sync db: " + err.message);
        });
});
