var sequelize = require("../dbConnection").sequelize;
var Sequelize = require("sequelize");

let productCustomers = sequelize.define(
  "productCustomers",
  {
    productCustomerId: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.DataTypes.INTEGER,
    },
    // customersId: {
    //   type: Sequelize.DataTypes.INTEGER,
    //   references: {
    //     model: "customers",
    //     col: "id"
    //   }
    // },
      // productsid: {
      //   type: Sequelize.DataTypes.INTEGER,
      //   references: {
      //     model: "products",
      //     col: "productId"
      //   }
      // }
  },
  
  {
    tableName: "productCustomers",
    timestamps: false,
  
    
  }
);

module.exports = productCustomers;
