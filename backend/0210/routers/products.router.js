const express = require("express");
const {ProdModel}= require("../models/products.model")
const prodRouter = express.Router();

// POST🆗
prodRouter.post("/add", async (req, res) => {
  const data = new ProdModel(req.body);
  await data.save();
  res.send("Added the new product");
});

//READ Data🆗
prodRouter.get("/", async (req, res) => {
//   const query = req.query;
  try {
    const prods = await ProdModel.find();
    res.send(prods);
  } catch (err) {
    res.send(err.message);
  }
});

//Update Data🆗
prodRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProdModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Data updated successfully ");
  } catch (err) {
    console.log(err);
  }
});

//Delete Data🆗
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