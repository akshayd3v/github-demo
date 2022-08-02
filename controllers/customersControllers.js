const Services = require("../services");
const Helper = require("../Helper/comman");
const Joi = require("joi");
module.exports = {
  getAllCustomers: async (data) => {
    let criteria = {
      //    email: data.email
    };
    let projection = ["name", "email"];
    let Customers = await Services.customersService.getCustomers(
      criteria,
      projection,
      data.limit || 10,
      data.skip || 0
    );
    console.log("getallCustomerfucntion()", Customers);
    return Customers;
  },

  addCustomers: async (data) => {
    try {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().min(5).required(),
      });
      let datas = await Helper.verifyjoiSchema(data, schema);
      if (!datas) {
        console.log("invalid data");
      } else {
        let dataToSave = {
          email: datas.email,
          name: datas.name,
        };
        let Customers = await Services.customersService.addCustomers(
          dataToSave
        );
        console.log(Customers);
        return Customers;
      }
    } catch (err) {
      console.log(err);
    }
  },
  updateCustomers: async (data) => {
    let dataToUpdate = {};
    if (data && data.email) dataToUpdate.email = data.email;
    if (data && data.name) dataToUpdate.name = data.name;
    let criteria = {
      id: data.id,
    };
    let Customers = await Services.customersService.updateCustomers(
      criteria,
      dataToUpdate
    );
    console.log(Customers);
    return Customers;
  },
  getCustomer: async (data) => {
    let criteria = {
      id: data.id,
    };
    let projection = ["name", "email"];
    let Customer = await Services.customersService.getCustomer(
      criteria,
      projection
    );
    return Customer;
  },

  deleteCustomer: async (data) => {
    let criteria = {
      id: data.id,
    };
    let Customer = await Services.customersService.deleteCustomer(criteria);
    console.log(Customer);
    return Customer;
  },

  rawQuery: async () => {
    let Customers = await Services.customersService.rawQuery();
    console.log(Customers);
    return Customers;
  },
};
