var sequelize = require("../dbConnection").sequelize;
var Sequelize = require("sequelize");

let Customers = sequelize.define(
  "customers",
  {
    id: {
      type:  Sequelize.DataTypes.UUID,
     
      primaryKey: true,
      
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      defaultValue: null,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      defaultValue: null,
    },
    age:{
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: null,
    },
    gender:
    {
     type:Sequelize.DataTypes.ENUM({
      values: ['Male','Female','Others']})
    }
  },
  {
    tableName: "Customers",
    timestamps: false,
  }
);

module.exports = Customers;
