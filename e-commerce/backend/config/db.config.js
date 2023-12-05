module.exports = {
    HOST: "mysql.agh.edu.pl", 
   // localization your mySQL instance – in this example I use mySQL instance from AGH cloud
    USER: "your login", /// for example for me it is rogus
    PASSWORD: "your password",
    DB: "your db name",
    dialect: "mysql",
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
   };
   