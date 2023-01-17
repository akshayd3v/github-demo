var sequelize = require("../dbConnection").sequelize;
var Sequelize = require("sequelize");

let Products = sequelize.define(
  "products",
  {
    productId: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.DataTypes.INTEGER,
    },
    productName: {
      type: Sequelize.DataTypes.STRING,
      defaultValue: null,
    },
    price: {
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: null,
    },
    // customerId: {
    //   type: Sequelize.DataTypes.INTEGER,
    //   references: {
    //     model: "customers",
    //     col: "id"
    //   }
    // }
  },
  {
    tableName: "Products",
    timestamps: false,
  }
);

module.exports = Products;
