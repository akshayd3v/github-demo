const Services = require("../services");
const { rawQuery } = require("../services/ProductsService");
module.exports = {
  getAllProducts: async (data) => {
    let criteria = {
      //    email: data.email
    };
    let projection = ["productId","productName", "price"];
    let Products = await Services.productsService.getProducts(
      criteria,
      projection,
      data.limit || 10,
      data.skip || 0
    );
    console.log("getallProductsfucntion()", Products);
    return Products;
  },
  addProducts: async (data) => {
    let dataToSave = {
      productName: data.productName,
      price: data.price,
    };
    let Products = await Services.productsService.addProducts(dataToSave);
    console.log(Products);
    return Products;
  },

  updateProducts: async (data) => {
    let dataToUpdate = {};
    if (data && data.email) dataToUpdate.email = data.email;
    if (data && data.name) dataToUpdate.name = data.name;
    let criteria = {
      productId: data.productId,
    };
    let Products = await Services.productsService.updateProduct(
      criteria,
      dataToUpdate
    );
    console.log(Products);
    return Products;
  },
  getProducts: async (data) => {
    let criteria = {
      productId: data.productId,
    };
    let projection = ["productName", "price"];
    let Products = await Services.productsService.getProduct(
      criteria,
      projection
    );
    return Products;
  },

  deleteProducts: async (data) => {
    let criteria = {
      productId: data.productId,
    };
    let Products = await Services.productsService.deleteProduct(criteria);
    console.log(Products);
    return Products;
  },

  
  rawQuery: async (data) => {
    let Products = await Services.productsService.rawQuery();
    console.log(Products);
    return Products;
  
  }
};



