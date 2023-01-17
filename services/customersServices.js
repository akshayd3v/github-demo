const { sequelize } = require("../dbConnection");
const Models = require("../models");

exports.getCustomers = (criteria, projection, limit, offset) => {
  console.log(criteria);
  return new Promise((resolve, reject) => {
    Models.Customers.findAll({
      where: criteria,
      attributes: projection,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

exports.addCustomers = (objToSave) => {
  return new Promise((resolve, reject) => {
    Models.Customers.create(objToSave)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

exports.updateCustomers = (criteria, objToUpdate) => {
  return new Promise((resolve, reject) => {
    Models.Customers.update(objToUpdate, { where: criteria })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

exports.getCustomer = (criteria, projection) => {
  return new Promise((resolve, reject) => {
    Models.Customers.findOne({
      where: criteria,
      attributes: projection,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

exports.deleteCustomer = (criteria) => {
  return new Promise((resolve, reject) => {
    Models.Customers.destroy({ where: criteria })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

// rawQuery
exports.rawQuery = () => {
  return new Promise((resolve, reject) => {
   sequelize.query("Select * from `Customers`", {  type:sequelize.QueryTypes.SELECT })
     .then((res) => {
        resolve(res);
        return resolve(res);
      })
    
      .catch((err) => reject(err));
  });
};
