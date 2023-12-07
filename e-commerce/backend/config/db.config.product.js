// db.config.product.js
module.exports = {
    HOST: "mysql.agh.edu.pl",
    USER: "costadan",
    PASSWORD: "9mFrnaoG6T6dDmXy",
    DB: "costadan",
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
};
