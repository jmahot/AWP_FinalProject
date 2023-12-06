module.exports = {
    HOST: "mysql.agh.edu.pl", 
   // localization your mySQL instance – in this example I use mySQL instance from AGH cloud
    USER: "costadan", /// for example for me it is rogus
    PASSWORD: "9mFrnaoG6T6dDmXy",
    DB: "costadan",
    dialect: "mysql",
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
    operatorsAliases: {},
    }
   };
   