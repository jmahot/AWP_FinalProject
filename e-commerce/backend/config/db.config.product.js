module.exports = {
    HOST: "mysql.agh.edu.pl", 
   // localization your mySQL instance – in this example I use mySQL instance from AGH cloud
    USER: "costada2", /// for example for me it is rogus
    PASSWORD: "FxJvnw8X9Rej0HAy",
    DB: "costada2",
    dialect: "mysql",
    pool: {
    max: 9,
    min: 0,
    acquire: 30000,
    idle: 10000,
    operatorsAliases: {},
    }
   };
   