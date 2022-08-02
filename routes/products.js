const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  let data = await Controllers.productsController.getAllProducts(req.query);
  if (data) res.json({ status: 200, message: "getAllCustomers", data });
  else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});

router.post("/", async (req, res, next) => {
  let data = await Controllers.productsController.addProducts(req.body);
  if (data)
    res.json({ status: 200, message: "User Successfully Created", data });
  else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});

router.put("/", async (req, res, next) => {
  let data = await Controllers.productsController.updateCustomers(req.body);
  if (data) res.json({ status: 200, message: "Updated Successfully" });
  else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});

router.get("/:productId", async (req, res, next) => {
  let data = await Controllers.productsController.getProducts(req.params);
  console.log(data);
  if (data) res.json({ status: 200, data: data });
  else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});

router.delete("/:productId", async (req, res, next) => {
  let data = await Controllers.productsController.deleteProducts(req.params);
  if (data) res.json({ status: 200, data: "User Deleted Successfully" });
  else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});

router.get("/raw/query", async (req, res, next) => {
  let data = await Controllers.productsController.rawQuery();

  if (data) res.json({ status: 200, message: "get selected Products", data });
  else {
    res.json({ status: 400, message: "Something Wrong!!" });
  }
});



module.exports = router;
