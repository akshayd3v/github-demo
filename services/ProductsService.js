const { sequelize } = require("../dbConnection");
const Models = require("../models");

//belongsTo function----------------------------

// Products.belongsTo(Customers,{
//   foreignKey: "customerId"
// });

//----------------------------------------------
//--------------hasonefunction------------------

// Customers.hasOne(Products, {
//   foreignKey: 'customerId'
// });

//----------------------------------------------
// hasMany function ----------------------------

// Customers.hasMany(Products, {
//   foreignKey: 'customerId',
//   as:"refer"
// });

//------------------------------------------------
//belongstoMany function -------------------------

Models.Customers.belongsToMany(Models.Products, {
  through: "productCustomers",
  // foreignKey: "id",
  as: "productDetails",
});

// for belongsto

// exports.getProducts = (criteria, projection, limit, offset) => {
//   console.log(criteria);
//   return new Promise((resolve, reject) => {
//     Models.Products
//       .findAll({
//         where: criteria,
//        attributes: projection,
//        include: [
//         {
//           model: Customers,
//           attributes: ["id","name", "email"],
//         },
//       ],

//       })
//       .then((res) => {
//         resolve(res);
//       })
//       .catch(err => reject(err))
//   })
// };

// for hasone and hasmany
exports.getProducts = (criteria, projection, limit, offset) => {
  console.log(criteria);
  return new Promise((resolve, reject) => {
    Models.Customers.findAll({
      where: criteria,
      attributes: ["email"],
      include: [
        {
          model: Models.Products,
          attributes: projection,
          as: "productDetails",
          through: {
            attributes: ["productCustomerId"],
          },
        },
      ],
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

exports.addProducts = (objToSave) => {
  return new Promise((resolve, reject) => {
    Models.Products.create(objToSave)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

exports.updateProduct = (criteria, objToUpdate) => {
  return new Promise((resolve, reject) => {
    Models.Products.update(objToUpdate, { where: criteria })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

exports.getProduct = (criteria, projection) => {
  return new Promise((resolve, reject) => {
    Models.Products.findOne({
      where: criteria,
      attributes: projection,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

exports.deleteProduct = (criteria) => {
  return new Promise((resolve, reject) => {
    Models.Products.destroy({ where: criteria })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

exports.rawQuery = () => {
  return new Promise((resolve, reject) => {
   sequelize
      .query("SELECT * FROM Products where productId = ?", {
        replacements: [2],
        type: sequelize.QueryTypes.SELECT,
      })
      .then((res) => {
        resolve(res);
        return resolve(res);
      })

      .catch((err) => reject(err));
  });
};
