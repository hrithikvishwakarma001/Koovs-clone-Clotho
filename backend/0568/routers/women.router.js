const express = require("express");
const {WomenModel} = require("../models/women.model")
const WomenRouter = express.Router();


WomenRouter.post("/create", async (req, res) => {
	const data = new WomenModel(req.body);
	await data.save();
	res.send("Added the new product");
});


WomenRouter.get("/", async (req, res) => {
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

		const totalCount = await WomenModel.countDocuments(query);
		const totalPages = Math.ceil(totalCount / limit);

		const products = await WomenModel.find(query)
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

WomenRouter.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const product = await WomenModel.findById(id);
		res.json({
			success: true,
			message: "Product fetched successfully",
			product,
		});
	} catch (err) {
		res.json({ success: false, message: "Failed to fetch product" });
	}
});

WomenRouter.patch("/update/:id", async (req, res) => {
	const { id } = req.params;
	try {
		await WomenModel.findByIdAndUpdate({ _id: id }, req.body);
		res.send("product updated successfully ");
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Failed to update product",
		});
	}
});


WomenRouter.delete("/delete/:id", async (req, res) => {
	const { id } = req.params;
	try {
		await WomenModel.findByIdAndDelete({ _id: id });
		res.send("Data Deleted successfully ");
	} catch (err) {
		console.log(err);
		res.send(err);
	}
});

module.exports = { WomenRouter };
