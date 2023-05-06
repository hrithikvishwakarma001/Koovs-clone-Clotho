const express = require("express");
const { ProdModel } = require("../models/products.model");
const prodRouter = express.Router();

// POST🆗
prodRouter.post("/create", async (req, res) => {
	const data = new ProdModel(req.body);
	await data.save();
	res.send("Added the new product");
});

//READ Data🆗
prodRouter.get("/", async (req, res) => {
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

		const totalCount = await ProdModel.countDocuments(query);
		const totalPages = Math.ceil(totalCount / limit);

		const products = await ProdModel.find(query)
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
