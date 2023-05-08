const express = require("express");
const { CartModel } = require("../models/cart.model");
const cartRouter = express.Router();


cartRouter.post("/create", async (req, res) => {
	const data = new CartModel(req.body);
	await data.save();
	res.send("product added successfully");
});


cartRouter.get("/admin", async (req, res) => {
	try {
		const products = await CartModel.find();
		res.json({
			success: true,
			message: "Products fetched successfully",
			products,
		});
	} catch (error) {
		console.error("Error retrieving products:", error);
		res.status(500).json({
			success: false,
			message: "Failed to fetch products",
		});
	}
});
cartRouter.get("/", async (req, res) => {
  const {userId} = req.body; 
  console.log('👻 -> file: cart.router.js:31 -> cartRouter.get -> userId:', userId)
	try {
		const products = await CartModel.find({userId});
		res.json({
			success: true,
			message: "Products fetched successfully",
			products,
		});
	} catch (error) {
		console.error("Error retrieving products:", error);
		res.status(500).json({
			success: false,
			message: "Failed to fetch products",
		});
	}
});

cartRouter.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const product = await CartModel.findById(id);
		res.json({
			success: true,
			message: "Product fetched successfully",
			product,
		});
	} catch (err) {
		res.json({ success: false, message: "Failed to fetch product" });
	}
});
//Update Data🆗
cartRouter.patch("/update/:id", async (req, res) => {
	const { id } = req.params;
	try {
		await CartModel.findByIdAndUpdate({ _id: id }, req.body);
		res.send("product updated successfully ");
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Failed to update product",
		});
	}
});

//Delete Data🆗
cartRouter.delete("/delete/:id", async (req, res) => {
	const { id } = req.params;
	try {
		await CartModel.findByIdAndDelete({ _id: id });
		res.send("Data Deleted successfully ");
	} catch (err) {
		res.send(err);
	}
});

module.exports = { cartRouter };
