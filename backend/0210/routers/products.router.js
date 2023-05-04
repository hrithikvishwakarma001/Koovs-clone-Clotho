const express = require("express");
// const { ProdModel } = require("../modals/users.modal");
const {ProdModel}= require("../models/products.model")
const prodRouter = express.Router();

// POST🆗
prodRouter.post("/add", async (req, res) => {
  const data = req.body;
  const user = new ProdModel(data);
  await user.save();

  res.send("Added the new product");
});

//READ Data🆗
prodRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const prods = await ProdModel.find(query);
    res.send(prods);
  } catch (err) {
    res.send(err.message);
  }
});

//Update User🆗
prodRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProdModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Data updated successfully ");
  } catch (err) {
    console.log(err);
  }
});

//Delete User🆗
prodRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProdModel.findByIdAndDelete({ _id: id });
    res.send("Data Deleted successfully ");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = { prodRouter };