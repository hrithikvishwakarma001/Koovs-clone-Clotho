const express = require("express");
const { AllProductModel } = require("../models/allproducts.model");
const allProductRouter = express.Router();


allProductRouter.post("/create", async (req, res) => {
	const data = new AllProductModel(req.body);
	await data.save();
	res.send("Added the new product");
});


allProductRouter.get("/", async (req, res) => {
	let { q, page, sort, order, limit, category } = req.query;
	order = order === "asc" ? -1 : 1;
	try {
		const query = {};

		if (q) {
			query.title = { $regex: q, $options: "i" };
		}

		if (category) {
			query.category = { $regex: category, $options: "i" };
		}

		const totalCount = await AllProductModel.countDocuments(query);
		const totalPages = Math.ceil(totalCount / limit);

		const products = await AllProductModel.find(query)
			.sort({ [sort]: order })
			.skip((page - 1) * limit)
			.limit(limit);

		res.json({
			success: true,
			message: "Products fetched successfully",
			page,
			totalPages,
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

allProductRouter.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const product = await AllProductModel.findById(id);
		res.json({
			success: true,
			message: "Product fetched successfully",
			product,
		});
	} catch (err) {
		res.json({ success: false, message: "Failed to fetch product" });
	}
});

allProductRouter.patch("/update/:id", async (req, res) => {
	const { id } = req.params;
	try {
		await AllProductModel.findByIdAndUpdate({ _id: id }, req.body);
		res.send("product updated successfully ");
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Failed to update product",
		});
	}
});


allProductRouter.delete("/delete/:id", async (req, res) => {
	const { id } = req.params;
	try {
		await AllProductModel.findByIdAndDelete({ _id: id });
		res.send("Data Deleted successfully ");
	} catch (err) {
		console.log(err);
		res.send(err);
	}
});

module.exports = {  allProductRouter };
