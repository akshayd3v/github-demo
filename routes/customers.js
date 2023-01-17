var express = require("express");
var router = express.Router();
let Controllers = require("../controllers");
//const Joi = require("joi");
//const validationMiddleware=require("../middleware/validatonMiddleware")

/* GET users listing. */
router.get("/", async (req, res, next) => {
  let data = await Controllers.customerController.getAllCustomers(req.query);

  if (data) res.json({ status: 200, message: "getAllCustomers", data });
  else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});

//,validationMiddleware,
router.post("/", async (req, res, next) => {
  let data = await Controllers.customerController.addCustomers(req.body);
  console.log("router POST",data);
  if (data){
    res.json({ status: 200, message: "User Successfully Created", data });
  }
  else {
    res.json({ status: 400, message: "Something Wrong!!"});
  }
});

//,validationMiddleware
router.put("/", async (req, res, next) => {
  let data = await Controllers.customerController.updateCustomers(req.body);
  if (data) res.json({ status: 200, message: "Updated Successfully" });
  else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});

// router.get("/:id", async (req, res, next) => {
//   let data = await Controllers.customerController.getCustomer(req.params);
//   if (data) res.json({ status: 200, data: data });
//   else {
//     res.json({ status: 400, message: "Something Wrong!!" });
//   }
// });

router.delete("/:id", async (req, res, next) => {
  let data = await Controllers.customerController.deleteCustomer(req.params);
  if (data) res.json({ status: 200, data: "User Deleted Successfully" });
  else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});

router.get("/rawquery", async (req, res, next) => {
  let data = await Controllers.customerController.rawQuery();

  if (data) res.json({ status: 200, message: "get selected Customers", data });
  else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});

module.exports = router;
