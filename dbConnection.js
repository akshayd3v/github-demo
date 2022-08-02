var Sequelize = require("sequelize");

var sequelize = new Sequelize("shyama", "root", "5858", {
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
