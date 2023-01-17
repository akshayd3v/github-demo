var Sequelize = require("sequelize");

var sequelize = new Sequelize("DB_NAME", "root", "Enter_your_password", {
  host: "localhost",
  dialect: "mysql",
  logging: true,
});

var connect = () => {
  sequelize
    .authenticate()
    .then(() => {
      sequelize.sync({ alter: true });
      console.log("Connected Successfully");
    })
    .catch((err) => {
      console.log("Sequelize Connection Error:  ", err);
    });
};

module.exports = {
  sequelize: sequelize,
  connect: connect,
};
