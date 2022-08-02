var sequelize = require("../dbConnection").sequelize;
var Sequelize = require("sequelize");

let Customers = sequelize.define(
  "customers",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.DataTypes.INTEGER,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      defaultValue: null,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      defaultValue: null,
    },
  },
  {
    tableName: "Customers",
    timestamps: false,
  }
);

module.exports = Customers;
