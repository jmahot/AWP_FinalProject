module.exports = {
    HOST: 'localhost',
    USER: 'your_mysql_user',
    PASSWORD: 'your_mysql_password',
    DB: 'your_database_name',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  