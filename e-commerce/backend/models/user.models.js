module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
        id: {
        type: Sequelize.INT
        },
        Username: {
        type: Sequelize.VARCHAR
        },
        password: {
        type: Sequelize.VARCHAR
        }
       
   
    });
    return Event;
   };
   