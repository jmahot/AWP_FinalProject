module.exports = {
    HOST: "mysql.agh.edu.pl", 
   // localization your mySQL instance – in this example I use mySQL instance from AGH cloud
    USER: "costada1", /// for example for me it is rogus
    PASSWORD: "Qfy8jydB6AHMSjn1",
    DB: "costada1",
    dialect: "mysql",
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
    operatorsAliases: {},
    }
   };
   